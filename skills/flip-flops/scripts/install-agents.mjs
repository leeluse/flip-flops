#!/usr/bin/env node

import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const args = process.argv.slice(2);
const force = args.includes("--force");
const check = args.includes("--check");

const targetIndex = args.indexOf("--target");
const explicitTarget =
  targetIndex >= 0 && args[targetIndex + 1] ? resolve(args[targetIndex + 1]) : null;

const scriptDir = dirname(fileURLToPath(import.meta.url));
const source = resolve(scriptDir, "../assets/AGENTS.md");

function findRepoRoot() {
  try {
    return execFileSync("git", ["rev-parse", "--show-toplevel"], {
      cwd: process.cwd(),
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
  } catch {
    return process.cwd();
  }
}

const root = findRepoRoot();
const target = explicitTarget ?? join(root, "AGENTS.md");

const sourceText = await readFile(source, "utf8");
const targetExists = existsSync(target);
const targetText = targetExists ? await readFile(target, "utf8") : null;
const matches = targetText === sourceText;

if (check) {
  if (matches) {
    console.log(`Flip-Flops AGENTS.md is current: ${target}`);
    process.exit(0);
  }

  console.error(
    targetExists
      ? `AGENTS.md differs from the Flip-Flops template: ${target}`
      : `AGENTS.md is missing: ${target}`,
  );
  process.exit(1);
}

if (matches) {
  console.log(`Flip-Flops AGENTS.md is already current: ${target}`);
  process.exit(0);
}

if (targetExists && !force) {
  console.error(
    `AGENTS.md already exists and differs: ${target}\n` +
      "Re-run with --force to back it up and install Flip-Flops.",
  );
  process.exit(2);
}

if (targetExists) {
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const backup = `${target}.flip-flops-backup-${stamp}`;
  await copyFile(target, backup);
  console.log(`Backed up existing AGENTS.md to: ${backup}`);
}

await mkdir(dirname(target), { recursive: true });
await writeFile(target, sourceText, "utf8");
console.log(`Installed Flip-Flops AGENTS.md: ${target}`);
