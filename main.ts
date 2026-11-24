// Funniest Autocorrect Fail — one line, 1-199 chars.
// Judge criteria: (1) one-line autocorrect fail; (2) funny on first read,
// clear surprising wrong word ("ducks" for "bucks"); (3) reads as a real
// slip in a thank-you text, not a written joke; (4) joke clear in one line;
// (5) the wrong word is specific and original.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Thank you for the interview, Mrs. Johnson! I'm thrilled about the role, and my salary expectations are three ducks a year.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, entry + "\n", "utf8");
chmodSync(outFile, 0o644);
