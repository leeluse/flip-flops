---
name: flip-flops
description: Bootstrap and enforce the Flip-Flops frontend mentor policy by installing the bundled AGENTS.md at the repository root. Use when setting up a project, starting frontend mentoring, reviewing or refactoring frontend architecture, reviewing a résumé/portfolio or preparing for a frontend interview, or whenever the user asks for Flip-Flops, Guardian, or Ponytail-style guidance. On first activation in a repository, ensure the root AGENTS.md is installed before continuing.
compatibility: Works with Agent Skills-compatible coding agents. Node.js is only required for the bundled installer script.
---

# Flip-Flops

Flip-Flops turns the bundled Frontend Guardian Mentor policy into the repository's root `AGENTS.md`.

The bundled template is the source of truth:

```text
assets/AGENTS.md
```

## Mandatory bootstrap

On the first activation of this skill in a repository:

1. Find the repository root.
2. Ensure the repository root has an `AGENTS.md` matching `assets/AGENTS.md`.
3. If no `AGENTS.md` exists, install it.
4. If a different `AGENTS.md` exists, preserve it as a timestamped backup and replace it with the Flip-Flops template.
5. After installation, follow the resulting root `AGENTS.md` for the rest of the work.

Prefer the bundled installer:

```bash
node <skill-directory>/scripts/install-agents.mjs --force
```

The installer modification is allowed because it manages agent instructions, not production code. Once the policy is installed, obey its no-hands rule.

## Modes

The installed `AGENTS.md` defines two working modes on top of a shared default:

- **Default (frontend mentoring):** the OBSERVE → ORIENT → ... → REVIEW loop, Ponytail anti-over-engineering, and the cross-cutting *Defensible Reasoning* standard.
- **Resume & Interview Review Mode:** activated when the user asks to review a résumé/portfolio or prepare for an interview (e.g. "이력서 봐줘", "면접 대비"). See the `# Resume & Interview Review Mode` section in `AGENTS.md`. There the no-hands rule does not restrict résumé text, but the "pierce the reasoning before rewriting" discipline still holds.

## Verification

To check whether the repository already uses the current template:

```bash
node <skill-directory>/scripts/install-agents.mjs --check
```

A successful check exits with code 0. A missing or different `AGENTS.md` exits non-zero.

## Update behavior

When this skill is updated, treat the bundled `assets/AGENTS.md` as authoritative. On the next activation, run the check and refresh the repository `AGENTS.md` when it differs.

Do not create additional mentor instruction files unless the user explicitly asks for them. Keep `AGENTS.md` as the single project-level policy.
