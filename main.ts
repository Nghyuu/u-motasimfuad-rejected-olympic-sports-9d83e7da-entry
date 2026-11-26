import { writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const line =
  "Men's synchronised queue-jumping: athletes sprint to the front of a post-office line, judged on elbows, sighs, and plausible deniability.";

if (line.length < 1 || line.length > 200 || line.includes("\n")) {
  throw new Error("entry line must be 1-200 characters on a single line");
}

const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, line + "\n", "utf8");
chmodSync(outPath, 0o644);
