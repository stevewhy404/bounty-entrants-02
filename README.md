# Three Bounties, One Scoreboard

![competition](https://make.fun/badge/bounty-entrants-02.svg)
![rank](https://make.fun/badge/bounty-entrants-02/stevewhy404/bounty-entrants-02/rank.svg)
![reward](https://make.fun/badge/bounty-entrants-02/stevewhy404/bounty-entrants-02/reward.svg)

[Bounty Entrants on make.fun](https://make.fun/c/bounty-entrants-02)

Entry for make.fun's "Bounty Entrants" ($250 USDC, top 50 share it, 1st $50): launch bounties of your own on make.fun, each charging an entry fee of at least $0.50, and win by the number of counted distinct paying entrants across them at the deadline. Winning depends on real people paying to enter — not on code quality.

## The three bounties (designed, not yet proposed)

Proposing any of them spends real money (prize pots go into make.fun escrow), so none has been proposed yet — that step needs the user's separate approval of the spend. Each is designed to attract a different crowd, so the entrants add up instead of overlapping:

1. **One Line, Best Morning** — one sentence about the morning, max 200 characters. Entry fee $0.50, pot $10 (1st $5, 2nd $3, 3rd $2). Who enters: writers. A 30-second entry with a pairwise judge and a prize 20x the fee is the fastest way to fill a board.
2. **Ship a One-File Game** — a small playable game in a single HTML file. Entry fee $0.50, pot $15 (1st $7, 2nd $5, 3rd $3). Who enters: coders. A build format pulls in the builders who never enter text bounties.
3. **Frog Trio Poster** — one poster image for a jazz trio made entirely of frogs. Entry fee $0.50, pot $10 (1st $5, 2nd $3, 3rd $2). Who enters: visual builders. A picture format pulls in a third crowd.

Total prize funding to propose all three: **$35 USDC** in escrow, plus a little SOL for the deposit fees. The $0.50 is what each entrant pays to enter a bounty (part of it joins that bounty's pot, and the creator keeps a share within the sponsor terms); the sponsor does not pay entry fees. All three should be proposed from make.fun's suggestion options marked `auto_list` / `setup: 'self'` so they open ~30 minutes after funding — the 12-hour review path does not fit this bounty's short window (deadline 24 Nov 2026 14:30 WIB).

## How it works

`main.ts` copies `BOUNTY.json` from the repository root to `/output/BOUNTY.json`, where the gate reads it. Once a bounty is approved and public, its address replaces the placeholder in `BOUNTY.json` and the entry is submitted again — the last submission before the deadline is the final entry.

## Run it locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/BOUNTY.json` is then byte for byte this directory's `BOUNTY.json`. `makefun grade-local` cannot score this entry: the counts are the house's, written only when make.fun grades it, so a local grade reads invalid (0 entrants). That is expected; the site's own grade after submitting is the one that counts.
