# Coin Cascade

A browser clicker about minting gold coins, catching them as they fall, and upgrading your mint.

**[Play Coin Cascade](https://coin-cascade-mint.timmyrow.chatgpt.site)**

## How to play

1. Click or tap **COIN**, or press **Space**, to mint coins.
2. Click or tap falling coins before they hit the floor to earn more and build your combo.
3. Spend coins on **Vault Tuning** upgrades for stronger presses, bonus coins, and catch-streak effects.
4. After earning 10,000 coins in a run, **Reforge Mint** to earn Foundry Cores for permanent skills. Reforging resets the current run's coins and mint upgrades.

Progress saves in your browser. It does not sync across devices, and clearing browser storage removes it. The **Reset** button asks for confirmation before clearing progress.

## Run locally

Open `index.html` in a modern browser, or serve the folder:

```sh
python -m http.server 8080
```

Then open <http://localhost:8080>.

The game uses HTML, CSS, Canvas, and JavaScript, with no package installation required. Mouse and touch controls are supported; sound can be toggled in the top bar.

## Source and build

- `index.html`: game interface and dialogs.
- `game.js`: coin simulation, upgrades, combos, achievements, prestige, and browser saves.
- `styles.css`: desktop and mobile layouts.
- `assets/shiny-coin.png`: coin artwork.
- `build.mjs`: packages the game into a Worker for its existing Sites deployment.

To generate that deployment bundle with Node.js:

```sh
npm run build
```

Output is written to `dist/`. The `.openai/hosting.json` file identifies the existing hosted game; the live link above is already published.

Optional rewarded-video buttons require a supported Poki SDK environment. They do not provide video rewards on the standalone site, and regular gameplay and coin-funded upgrades do not require ads.
