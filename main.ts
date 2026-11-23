// bounty-entrants-02 entry (Node 22, standard library only).
//
// The entry is the bounties themselves: this program copies BOUNTY.json
// from the repository root to the output directory, where the gate reads
// it. The house counts the paying entrants of every bounty BOUNTY.json
// names in make.fun's own database; nothing this program writes about
// the bounties is scored.
//
// BOUNTY.json currently holds the placeholder address, because no bounty
// has been proposed through the sponsor flow yet. Once each bounty is
// approved and public, its address replaces the placeholder and the
// entry is submitted again with the same program. The copy is byte for
// byte, so the two runs of an entry always write the same bytes.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

const source = join(BOT_DIR, 'BOUNTY.json');
const target = join(OUTPUT_DIR, 'BOUNTY.json');

try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`BOUNTY.json could not be copied from ${source}: ${(err as Error).message}`);
  process.exit(1);
}
