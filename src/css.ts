// Auto-generated file. Do not edit. Source: src/index.css

export const css: string = `/* ============================================================
   Futuristic neon / pixel / hack / metal theme
   - Theme tokens via light-dark(); auto (OS) + manual override
     through #color-scheme radios (:has() fallback works w/o JS)
   - Random animated background layers (.bg-*)
   - Motion is wrapped in prefers-reduced-motion guards
   ============================================================ */

@font-face {
    font-family: "Silkscreen";
    src: url("https://cdn.jsdelivr.net/fontsource/fonts/silkscreen@latest/latin-400-normal.woff2") format("woff2");
    font-display: swap;
}

:root {
    --font-pixel: "Silkscreen", ui-monospace, "Courier New", monospace;
    --font-body: system-ui, "Segoe UI", "Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif;

    /* ---- theme tokens ---- */
    --theme-canvas: light-dark(
        hsl(210 25% 94%),
        hsl(220 32% 6%)
    );
    --theme-text: light-dark(
        hsl(220 30% 14%),
        hsl(180 25% 90%)
    );
    --theme-text-dim: light-dark(
        hsl(220 15% 38%),
        hsl(185 12% 58%)
    );
    --theme-accent: light-dark(
        hsl(190 95% 28%),
        hsl(185 100% 55%)
    );
    --theme-accent-2: light-dark(
        hsl(315 85% 36%),
        hsl(315 100% 65%)
    );

    /* metal panels */
    --theme-panel: light-dark(
        hsl(210 30% 98% / .58),
        hsl(222 26% 14% / .58)
    );
    --theme-panel-solid: light-dark(
        hsl(210 30% 97%),
        hsl(222 26% 12%)
    );
    --theme-panel-edge: light-dark(
        hsl(215 25% 68%),
        hsl(192 35% 28%)
    );
    --theme-bevel-light: light-dark(
        hsl(0 0% 100% / .9),
        hsl(190 50% 75% / .14)
    );
    --theme-bevel-dark: light-dark(
        hsl(220 30% 40% / .30),
        hsl(220 45% 2% / .75)
    );
    --theme-glow: light-dark(
        hsl(190 95% 30% / .20),
        hsl(185 100% 55% / .30)
    );
    --theme-glow-strong: light-dark(
        hsl(190 95% 30% / .35),
        hsl(185 100% 55% / .55)
    );

    /* buttons */
    --button-face: light-dark(hsl(210 20% 93%), hsl(220 22% 16%));
    --button-face-hi: light-dark(hsl(210 25% 99%), hsl(220 22% 22%));
    --button-text: light-dark(hsl(220 30% 16%), hsl(180 25% 88%));
    --button-edge: light-dark(hsl(215 25% 60%), hsl(192 35% 32%));

    /* status badges */
    --status-ok-fg: light-dark(hsl(150 85% 20%), hsl(150 95% 60%));
    --status-ok-bg: light-dark(hsl(150 80% 40% / .14), hsl(150 95% 45% / .16));
    --status-ok-edge: light-dark(hsl(150 70% 35% / .5), hsl(150 90% 45% / .55));
    --status-warn-fg: light-dark(hsl(40 90% 26%), hsl(45 100% 60%));
    --status-warn-bg: light-dark(hsl(40 90% 50% / .16), hsl(45 100% 50% / .14));
    --status-warn-edge: light-dark(hsl(40 85% 45% / .5), hsl(45 100% 55% / .55));
    --status-error-fg: light-dark(hsl(0 80% 30%), hsl(0 100% 65%));
    --status-error-bg: light-dark(hsl(0 85% 50% / .12), hsl(0 100% 50% / .16));
    --status-error-edge: light-dark(hsl(0 75% 45% / .5), hsl(0 100% 55% / .55));
    --status-neutral-fg: light-dark(hsl(220 10% 30%), hsl(220 10% 68%));
    --status-neutral-bg: light-dark(hsl(220 10% 40% / .10), hsl(220 10% 55% / .14));
    --status-neutral-edge: light-dark(hsl(220 10% 40% / .4), hsl(220 10% 55% / .45));

    /* background layers (hue vars are randomized per page load by JS) */
    --bg-grid-line: light-dark(
        hsl(215 45% 30% / .17),
        hsl(var(--hue, 185) 95% 62% / .21)
    );
    --bg-scanline: light-dark(hsl(220 40% 20% / .05), hsl(0 0% 0% / .16));
    --bg-blob-a: light-dark(.10, .17);

    accent-color: var(--theme-accent);

    /* ---- scheme: auto by default, overridden by the radios (:has
           fallback) and by an inline color-scheme set before paint ---- */
    --color-scheme: light dark;
    color-scheme: var(--color-scheme);
    &:has(#color-scheme input[value="light"]:checked) { --color-scheme: light; }
    &:has(#color-scheme input[value="dark"]:checked) { --color-scheme: dark; }
}

/* ---- base ---- */

html {
    font-size: 15px;
    font-family: var(--font-body);
}

body {
    overflow-x: hidden;
    overflow-y: auto;
    margin: 0px;
    padding: 0px;
    font-size: 1rem;
    width: 100vw;
    min-height: 100vh;
    background-color: var(--theme-canvas);
    color: var(--theme-text);
    letter-spacing: .02em;
}

h1, h2, h3, legend, .button, [data-status] {
    font-family: var(--font-pixel);
    letter-spacing: .04em;
}

a {
    color: var(--theme-accent);
}

::selection {
    background: var(--theme-accent);
    color: var(--theme-canvas);
}

:focus-visible {
    outline: 2px solid var(--theme-accent);
    outline-offset: 2px;
}

/* ---- random animated background ---- */

.bg {
    position: fixed;
    inset: 0;
    z-index: -1;
    overflow: hidden;
    pointer-events: none;
    background:
        radial-gradient(130% 100% at 50% 0%, transparent 55%, light-dark(hsl(220 45% 40% / .12), hsl(224 60% 2% / .85)) 100%),
        var(--theme-canvas);
}

.bg-grid {
    position: absolute;
    top: 36%;
    left: -60%;
    right: -60%;
    bottom: -45%;
    transform-origin: 50% 0%;
    transform: perspective(460px) rotateX(62deg);
    background-image:
        repeating-linear-gradient(to right, var(--bg-grid-line) 0 2px, transparent 2px 64px),
        repeating-linear-gradient(to bottom, var(--bg-grid-line) 0 2px, transparent 2px 64px);
    -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 30%);
    mask-image: linear-gradient(to bottom, transparent 0%, black 30%);
}

.bg-blob {
    position: absolute;
    left: var(--x, 18%);
    top: var(--y, 24%);
    width: 46vmax;
    aspect-ratio: 1;
    translate: -50% -50%;
    border-radius: 50%;
    background: radial-gradient(circle at 50% 50%, hsl(var(--hue, 185) 100% 60% / var(--bg-blob-a)), transparent 65%);
}

.bg-blob.b2 {
    left: var(--x, 78%);
    top: var(--y, 58%);
    background: radial-gradient(circle at 50% 50%, hsl(var(--hue-2, 315) 100% 60% / var(--bg-blob-a)), transparent 65%);
}

.bg-blob.b3 {
    left: var(--x, 50%);
    top: var(--y, 90%);
    width: 34vmax;
    background: radial-gradient(circle at 50% 50%, hsl(calc(var(--hue, 185) + 30) 100% 60% / calc(var(--bg-blob-a) * .8)), transparent 65%);
}

.bg-scanlines {
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(to bottom, transparent 0 3px, var(--bg-scanline) 3px 4px);
}

.bg-scanlines::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 12%;
    background: linear-gradient(to bottom, transparent, hsl(var(--hue, 185) 100% 72% / .06), transparent);
}

.bg-glitch {
    position: absolute;
    left: 0;
    right: 0;
    top: 28%;
    height: 2px;
    background: hsl(var(--hue-2, 315) 100% 65% / .55);
    box-shadow: 0 0 14px hsl(var(--hue-2, 315) 100% 65% / .8);
    opacity: 0;
}

@keyframes bg-blob-drift {
    to {
        translate: calc(-50% + 9vmax) calc(-50% - 7vmax);
        scale: 1.18;
    }
}

@keyframes bg-grid-scroll {
    to { background-position: 0 0, 0 64px; }
}

@keyframes bg-sweep {
    from { transform: translateY(-110%); }
    to { transform: translateY(920%); }
}

@keyframes bg-glitch-flicker {
    0%, 91% { opacity: 0; }
    92% { opacity: .55; transform: translateY(9vh); }
    93% { opacity: 0; }
    96% { opacity: .35; transform: translateY(37vh); }
    97%, 100% { opacity: 0; transform: translateY(52vh); }
}

/* ---- page frame ---- */

header {
    position: static;
    width: 100%;
    height: auto;
    text-align: center;
    margin: 1rem 0rem 1rem 0rem;
    padding: 0rem;
}

h1 {
    margin: 1.2rem 0 .6rem;
    font-size: clamp(1.9rem, 5vw, 2.7rem);
    color: var(--theme-text);
    text-shadow:
        0 0 10px var(--theme-glow-strong),
        2px 0 0 color-mix(in oklab, var(--theme-accent), transparent 60%),
        -2px 0 0 color-mix(in oklab, var(--theme-accent-2), transparent 60%);
}

main {
    position: static;
    width: 100%;
    height: auto;
    text-align: center;
    margin: 1rem 0rem 1rem 0rem;
    padding: 0rem;
}

main h2::before {
    content: "// ";
    color: var(--theme-accent);
}

/* readme panel: brushed metal + bevel */
main .readme {
    position: relative;
    margin: .5rem auto 1rem;
    padding: 1rem 1.5rem;
    max-width: 72rem;
    text-align: left;
    border: 1px solid var(--theme-panel-edge);
    border-radius: 1rem;
    corner-shape: notch;
    background:
        linear-gradient(165deg, var(--theme-bevel-light), transparent 34%),
        var(--theme-panel);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow:
        inset 2px 2px 0 var(--theme-bevel-light),
        inset -2px -2px 0 var(--theme-bevel-dark);
}

main .cards-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

/* ---- cards: notched metal panels ---- */

.card {
    min-width: 300px;
    max-width: 100%;
    width: 40%;

    min-height: 250px;
    max-height: auto;
    height: auto;

    margin: 2rem 2.5rem 1rem 2.5rem;
    padding: 0rem 2rem 2rem 2rem;

    position: relative;
    border: 1px solid var(--theme-panel-edge);
    border-radius: 1.25rem;
    corner-shape: notch;

    /* glossed glass over brushed metal */
    background:
        repeating-linear-gradient(0deg, transparent 0 3px, var(--bg-scanline) 3px 4px),
        linear-gradient(160deg, var(--theme-bevel-light), transparent 30%),
        var(--theme-panel);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow:
        inset 2px 2px 0 var(--theme-bevel-light),
        inset -2px -2px 0 var(--theme-bevel-dark);
}

/* inner blueprint frame */
.card::before,
main .readme::before {
    content: "";
    position: absolute;
    inset: 7px;
    border: 1px dashed color-mix(in oklab, var(--theme-accent), transparent 72%);
    border-radius: .8rem;
    corner-shape: notch;
    pointer-events: none;
}

.card h2 {
    margin-top: 1.6rem;
    padding-bottom: .5rem;
    border-bottom: 1px solid color-mix(in oklab, var(--theme-accent), transparent 60%);
}

.card:hover {
    border-color: color-mix(in oklab, var(--theme-accent), transparent 35%);
    box-shadow:
        inset 2px 2px 0 var(--theme-bevel-light),
        inset -2px -2px 0 var(--theme-bevel-dark),
        0 0 20px var(--theme-glow),
        0 10px 28px light-dark(hsl(220 30% 20% / .25), hsl(0 0% 0% / .5));
}

/* Info styles */
.card .info {
    margin-bottom: 1.5rem;
}

.card .manual {
    font-style: italic;
    margin-bottom: 1.5rem;
    line-height: 1.7rem;
    display: block;
    text-align: left;
}

/* status badge */
[data-status] {
    display: inline-block;
    padding: .1rem .55rem;
    border-radius: .3rem;
    corner-shape: notch;
    border: 1px solid var(--status-neutral-edge);
    color: var(--status-neutral-fg);
    background: var(--status-neutral-bg);
    font-size: .9rem;
}

[data-status="pending"] {
    border-color: var(--status-warn-edge);
    color: var(--status-warn-fg);
    background: var(--status-warn-bg);
}

[data-status="ok"] {
    border-color: var(--status-ok-edge);
    color: var(--status-ok-fg);
    background: var(--status-ok-bg);
    text-shadow: 0 0 8px var(--status-ok-fg);
}

[data-status="warn"] {
    border-color: var(--status-warn-edge);
    color: var(--status-warn-fg);
    background: var(--status-warn-bg);
}

[data-status="error"] {
    border-color: var(--status-error-edge);
    color: var(--status-error-fg);
    background: var(--status-error-bg);
    text-shadow: 0 0 8px var(--status-error-fg);
}

/* ---- buttons: beveled mechanical keys ---- */

.button {
    background: linear-gradient(to bottom, var(--button-face-hi), var(--button-face));
    color: var(--button-text);
    border: 1px solid var(--button-edge);
    border-radius: .4rem;
    padding: .5rem 1rem;
    text-decoration: none;
    display: inline-block;
    margin-top: .5rem;
    font-size: .95rem;
    cursor: pointer;
    box-shadow:
        inset 2px 2px 0 var(--theme-bevel-light),
        inset -2px -2px 0 var(--theme-bevel-dark);
}

.button:hover,
.button:focus-visible {
    color: var(--theme-accent);
    border-color: color-mix(in oklab, var(--theme-accent), transparent 35%);
    text-shadow: 0 0 8px var(--theme-glow-strong);
    translate: 0 -1px;
    box-shadow:
        inset 2px 2px 0 var(--theme-bevel-light),
        inset -2px -2px 0 var(--theme-bevel-dark),
        0 0 14px var(--theme-glow);
}

.button:active {
    translate: 0 1px;
    box-shadow:
        inset -2px -2px 0 var(--theme-bevel-light),
        inset 2px 2px 0 var(--theme-bevel-dark);
}

/* ---- popover ---- */

.popover-dialog {
    padding: 1rem 1.25rem 2rem 1.25rem;
    border: 1px solid color-mix(in oklab, var(--theme-accent), transparent 40%);
    border-radius: 1rem;
    corner-shape: notch;
    color: var(--theme-text);
    background:
        linear-gradient(165deg, var(--theme-bevel-light), transparent 34%),
        color-mix(in oklab, var(--theme-panel-solid), transparent 4%);
    box-shadow:
        inset 2px 2px 0 var(--theme-bevel-light),
        inset -2px -2px 0 var(--theme-bevel-dark),
        0 0 28px var(--theme-glow-strong),
        0 16px 40px light-dark(hsl(220 30% 20% / .3), hsl(0 0% 0% / .6));
    max-width: min(92vw, 30rem);

    /* closed state; :popover-open flips it, transitions animate it */
    opacity: 0;
    transform: translateY(12px) scale(.97);
}

.popover-dialog:popover-open {
    opacity: 1;
    transform: none;

    @starting-style {
        opacity: 0;
        transform: translateY(12px) scale(.97);
    }
}

.popover-dialog::backdrop {
    background-color: light-dark(hsl(220 30% 45% / .25), hsl(222 45% 2% / .55));
    -webkit-backdrop-filter: blur(14px);
    backdrop-filter: blur(14px);
}

.popover-dialog .server-popover .info-container,
.popover-dialog .links-popover .links-container {
    padding: 0 1rem 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
}

.popover-dialog .links-popover .links-container {
    padding: 0;
    flex-direction: row;
    flex-wrap: wrap;
    gap: .35rem .75rem;
    align-items: center;
}

.popover-dialog .popover-dialog-close-button {
    border: 1px solid var(--button-edge);
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: .4rem;
    corner-shape: notch;
    line-height: 1.5rem;
    padding: 0 .5rem 0 .5rem;
    margin: 1rem 1rem 0 0;
    background: linear-gradient(to bottom, var(--button-face-hi), var(--button-face));
    color: var(--button-text);
    font-family: var(--font-pixel);
    cursor: pointer;
    box-shadow:
        inset 2px 2px 0 var(--theme-bevel-light),
        inset -2px -2px 0 var(--theme-bevel-dark);
}

.popover-dialog .popover-dialog-close-button:hover,
.popover-dialog .popover-dialog-close-button:focus-visible {
    color: var(--theme-accent);
    border-color: color-mix(in oklab, var(--theme-accent), transparent 35%);
    text-shadow: 0 0 8px var(--theme-glow-strong);
    translate: 0 -1px;
    box-shadow:
        inset 2px 2px 0 var(--theme-bevel-light),
        inset -2px -2px 0 var(--theme-bevel-dark),
        0 0 14px var(--theme-glow);
}

.popover-dialog .popover-dialog-close-button:active {
    translate: 0 1px;
    box-shadow:
        inset -2px -2px 0 var(--theme-bevel-light),
        inset 2px 2px 0 var(--theme-bevel-dark);
}

/* ---- theme switcher (Sys / Light / Dark) ---- */

#color-scheme {
    position: fixed;
    top: .75rem;
    right: .75rem;
    z-index: 20;
    display: flex;
    gap: .15rem;
    margin: 0;
    padding: .55rem .4rem .35rem;
    min-inline-size: 0;
    border: 1px solid color-mix(in oklab, var(--theme-accent), transparent 55%);
    border-radius: 6px;
    corner-shape: notch;
    outline: 3px ridge color-mix(in oklab, var(--theme-accent), transparent 55%);
    outline-offset: 2px;
    background: color-mix(in oklab, var(--theme-panel), transparent 30%);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    color: var(--theme-text);
}

#color-scheme legend {
    font-size: .62rem;
    padding: 0 .5em;
    letter-spacing: .2em;
    color: color-mix(in oklab, var(--theme-accent), transparent 20%);
}

#color-scheme label {
    display: flex;
    align-items: center;
    gap: .32rem;
    padding: .3rem .5rem;
    border-radius: 4px;
    corner-shape: superellipse(-1);
    font-size: .72rem;
    letter-spacing: .06em;
    cursor: pointer;
    user-select: none;
}

#color-scheme input {
    --d: 8px;
    --rot: 225deg;
    appearance: none;
    width: var(--d);
    height: var(--d);
    margin: 0;
    background: currentColor;
    color: inherit;
    border-radius: 2px;
    corner-shape: notch;
    rotate: var(--rot);
    outline: 1px solid color-mix(in oklab, var(--theme-text), transparent 50%);
    outline-offset: 2px;
    cursor: pointer;
}

#color-scheme label:hover input:not(:checked) {
    --rot: 90deg;
}

#color-scheme input:checked {
    --rot: 0deg;
    outline-color: var(--theme-accent);
}

#color-scheme label:has(:checked) {
    background: var(--theme-text);
    color: var(--theme-canvas);
    box-shadow: 0 0 10px var(--theme-glow);
}

#color-scheme label:has(input:focus-visible) {
    outline: 2px solid color-mix(in oklab, var(--theme-accent), transparent 35%);
    outline-offset: -3px;
}

/* ---- footer ---- */

footer {
    position: static;
    bottom: 0;
    width: 100%;
    height: auto;
    text-align: center;
    margin: 0rem 0rem 0rem 0rem;
    padding: 1.5rem 0 1rem;
    color: var(--theme-text-dim);
    font-size: .85rem;
    letter-spacing: .25em;
}

/* ---- motion (all guarded by prefers-reduced-motion) ---- */

@media (prefers-reduced-motion: no-preference) {

    /* theme + hover transitions, doc-style */
    body,
    header,
    main,
    footer,
    main .readme,
    .card,
    .button,
    .popover-dialog,
    .popover-dialog .popover-dialog-close-button,
    .bg,
    #color-scheme,
    #color-scheme label,
    #color-scheme input,
    [data-status] {
        transition-property: background, background-color, color, border-color, outline-color, box-shadow, text-shadow, filter, translate, transform;
        transition-duration: .2s;
        transition-timing-function: ease-out;
    }

    .card,
    .button,
    .popover-dialog .popover-dialog-close-button {
        transition-duration: .2s;
        transition-timing-function: ease-out;
    }

    /* popover open/close (needs allow-discrete for display/overlay) */
    .popover-dialog {
        transition-property: opacity, transform, display, overlay;
        transition-duration: .25s;
        transition-timing-function: ease-out;
        transition-behavior: allow-discrete;
    }

    /* staggered entry */
    header,
    main .readme,
    main .cards-container .card,
    footer {
        animation: rise-in .55s ease-out backwards;
    }

    main .readme { animation-delay: .1s; }
    footer { animation-delay: .25s; }

    main .cards-container .card:nth-of-type(1) { animation-delay: .18s; }
    main .cards-container .card:nth-of-type(2) { animation-delay: .26s; }
    main .cards-container .card:nth-of-type(3) { animation-delay: .34s; }
    main .cards-container .card:nth-of-type(4) { animation-delay: .42s; }
    main .cards-container .card:nth-of-type(5) { animation-delay: .5s; }
    main .cards-container .card:nth-of-type(6) { animation-delay: .58s; }
    main .cards-container .card:nth-of-type(7) { animation-delay: .66s; }
    main .cards-container .card:nth-of-type(8) { animation-delay: .74s; }
    main .cards-container .card:nth-of-type(n+9) { animation-delay: .8s; }

    /* background layers */
    .bg-grid { animation: bg-grid-scroll 7s linear infinite; }

    .bg-blob {
        animation: bg-blob-drift var(--dur, 60s) ease-in-out var(--del, 0s) infinite alternate;
    }

    .bg-scanlines::after { animation: bg-sweep 11s linear infinite; }

    .bg-glitch { animation: bg-glitch-flicker 8s linear infinite; }

    /* radio diamonds */
    #color-scheme input { transition-property: rotate, outline-color; transition-duration: .2s; }
    #color-scheme label:hover input,
    #color-scheme input:focus-visible { transition-timing-function: ease-in; }
}

@keyframes rise-in {
    from {
        opacity: 0;
        transform: translateY(14px);
    }
}

/* ---- small screens ---- */

@media (max-width: 700px) {
    header {
        padding-top: 3.2rem;
    }

    .card {
        width: 100%;
        min-width: 0;
        margin: 1.25rem 0;
        padding: 0 1.25rem 1.5rem;
    }

    main .readme {
        margin: .5rem .75rem 1rem;
        padding: .85rem 1rem;
    }

    #color-scheme {
        top: .5rem;
        right: .5rem;
    }
}
`;
