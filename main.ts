import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Puddlewick: steady rain all morning, clearing by lunch; buses running late as usual, so pack an umbrella and a forgiving attitude.";

// Gate: UTF-8 text, 1-140 chars, single line, not only whitespace.
const lines = entry.split("\n");
if (entry.length < 1 || entry.length > 140) throw new Error(`gate: ${entry.length} chars`);
if (lines.length !== 1) throw new Error("gate: must be one line");
if (!/\S/.test(entry)) throw new Error("gate: only whitespace");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(`wrote ${entry.length} chars`);
