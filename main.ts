import { mkdirSync, writeFileSync } from "node:fs";

// Two Lines to Your Past Self: a warning about one specific moment,
// then one sentence on why that moment mattered and what changed.
const LINES: string[] = [
  "Do not send that 2 a.m. text to your ex — you will reread it at breakfast and wish the send button had a curfew.",
  "It mattered because that one message cost you three months of peace, and the silence after it taught you to sleep on every angry draft.",
];

const MAX_CHARS = 280;
const EXPECTED_LINES = 2;

// Join with a single newline so the file holds exactly two lines.
const text = LINES.join("\n");

if (LINES.length !== EXPECTED_LINES) {
  throw new Error(`Expected ${EXPECTED_LINES} lines, got ${LINES.length}`);
}
for (const line of LINES) {
  if (line.trim().length === 0) {
    throw new Error("A line must not be blank");
  }
}
if (text.length < 1 || text.length > MAX_CHARS) {
  throw new Error(`Entry is ${text.length} characters, limit is ${MAX_CHARS}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text + "\n", "utf8");
console.log(`Wrote ${text.length} characters in ${LINES.length} lines to /output/entry.txt`);
