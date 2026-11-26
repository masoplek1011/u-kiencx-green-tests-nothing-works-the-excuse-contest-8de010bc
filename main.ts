import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I never actually wired the feature up, so the tests are just applauding an empty stage.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
