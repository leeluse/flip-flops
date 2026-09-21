# flip-flops

A portable frontend mentor policy for Agent Skills.

Flip-Flops installs the bundled **Frontend Guardian Mentor + Ponytail philosophy** as a repository-level `AGENTS.md`, so the same mentoring rules can travel across projects.

## Install the skill

```bash
npx skills add leeluse/flip-flops --skill flip-flops
```

Agent Skills packages support `SKILL.md` plus optional `scripts/` and `assets/`. The standard does not provide a post-install hook that can silently write files into the target repository, so Flip-Flops performs the `AGENTS.md` bootstrap on first activation.

After installation, invoke the skill once in the project and it will install the bundled template as the root `AGENTS.md`.

For a deterministic manual bootstrap with the common cross-client install path:

```bash
node .agents/skills/flip-flops/scripts/install-agents.mjs --force
```

If your agent installs skills in a client-specific directory, run the same script from that installed skill directory.

## Check

```bash
node .agents/skills/flip-flops/scripts/install-agents.mjs --check
```

## Existing AGENTS.md

When `--force` is used and a different `AGENTS.md` already exists, Flip-Flops creates a timestamped backup beside it before installing the template.

## Structure

```text
skills/
└── flip-flops/
    ├── SKILL.md
    ├── assets/
    │   └── AGENTS.md
    └── scripts/
        └── install-agents.mjs
```

`assets/AGENTS.md` is the canonical policy distributed with the skill.
