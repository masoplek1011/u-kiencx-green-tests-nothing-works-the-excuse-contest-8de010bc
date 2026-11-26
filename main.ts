import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I wired the tests to pass and left the product as an aspirational README.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
