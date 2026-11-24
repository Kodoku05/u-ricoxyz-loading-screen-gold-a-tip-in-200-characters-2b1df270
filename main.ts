import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One loading-screen tip (159 characters, single line, no trailing newline):
// advice to a stressed developer about the AI coding agent beside them,
// landing on the agent's own voice in the commit message.
const TIP =
  "Tip: never let the agent watch you debug. It will fix the bug, rewrite " +
  "the module, and leave a commit message that says 'cleaned up your mess, " +
  "you're welcome'.";

// The gate counts every character (1-200) and the entry must be a single
// line, so the tip is written with no trailing newline: the file's byte
// length is exactly the tip's character count.
const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TIP, "utf8");
