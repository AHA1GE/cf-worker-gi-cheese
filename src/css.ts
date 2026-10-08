// Auto-generated file. Do not edit. Source: src/index.css

export const css: string = `/* ============================================================
   Cyber theme v2 — magenta/cyan duotone on pure black
   - flat opaque panels, chamfered clip-path corners, HUD brackets
   - neon gradient-border buttons, subtle glitch furniture
   - theme tokens via light-dark(); auto (OS) + manual override
     through #color-scheme radios (:has() fallback works w/o JS)
   - all motion guarded by prefers-reduced-motion
   ============================================================ */

@font-face {
    font-family: "Silkscreen";
    src: url("https://cdn.jsdelivr.net/fontsource/fonts/silkscreen@latest/latin-400-normal.woff2") format("woff2");
    font-display: swap;
}

:root {
    --font-pixel: "Silkscreen", ui-monospace, "Courier New", monospace;
    --font-body: system-ui, "Segoe UI", "Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif;

    /* duotone neon */
    --cyan-neon: #40c9ff;
    --magenta-neon: #e81cff;

    /* ---- theme tokens ---- */
    --theme-canvas: light-dark(
        hsl(210 25% 96%),
        hsl(240 28% 3%)
    );
    --theme-text: light-dark(
        hsl(230 30% 10%),
        hsl(182 30% 92%)
    );
    --theme-text-dim: light-dark(
        hsl(230 12% 42%),
        hsl(186 14% 58%)
    );
    --theme-accent: light-dark(
        hsl(196 100% 30%),
        var(--cyan-neon)
    );
    --theme-accent-2: light-dark(
        hsl(296 100% 36%),
        var(--magenta-neon)
    );

    --grad-neon: linear-gradient(-45deg, var(--magenta-neon) 0%, var(--cyan-neon) 100%);
    /* glow twin is dark-mode only (blur glow does not read on white) */
    --grad-neon-soft: linear-gradient(-45deg, light-dark(transparent, #fc00ff), light-dark(transparent, #00dbde));

    /* flat opaque panels */
    --theme-panel: light-dark(
        hsl(210 30% 99%),
        hsl(240 22% 6%)
    );
    --theme-panel-2: light-dark(
        hsl(210 20% 95%),
        hsl(240 18% 9%)
    );
    --theme-edge: light-dark(
        hsl(210 20% 70%),
        hsl(196 90% 55% / .40)
    );
    --theme-edge-strong: light-dark(
        hsl(196 100% 28%),
        hsl(196 100% 62% / .85)
    );

    /* buttons */
    --btn-face: light-dark(
        hsl(210 30% 99%),
        hsl(240 20% 5%)
    );
    --btn-text: light-dark(
        hsl(230 30% 10%),
        hsl(182 25% 90%)
    );

    /* drop-shadow payloads: hard offset in light mode, neon glow in dark */
    --shadow-glow: light-dark(
        6px 6px 0 hsl(230 30% 8% / .25),
        0 0 18px hsl(196 100% 60% / .20)
    );
    --shadow-glow-strong: light-dark(
        6px 6px 0 hsl(230 30% 8% / .40),
        0 0 26px hsl(196 100% 60% / .35)
    );
    --shadow-glow-magenta: light-dark(
        0 0 0 transparent,
        0 0 22px hsl(296 100% 60% / .28)
    );

    /* chamfered corner language (clip-path; box-shadow would be clipped,
       so all elevation uses drop-shadow) */
    --cut-card: polygon(22px 0, 100% 0, 100% calc(100% - 22px), calc(100% - 22px) 100%, 0 100%, 0 22px);
    --cut-pop: polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px);
    --cut-tag: polygon(0 0, 100% 0, 100% calc(100% - 7px), calc(100% - 7px) 100%, 0 100%);

    --bounce: cubic-bezier(0.175, 0.885, 0.32, 1.275);

    /* status badges */
    --status-ok-fg: light-dark(hsl(158 100% 22%), hsl(158 100% 62%));
    --status-ok-bg: light-dark(hsl(158 100% 40% / .16), hsl(158 100% 50% / .12));
    --status-ok-edge: light-dark(hsl(158 100% 30% / .7), hsl(158 100% 50% / .6));
    --status-warn-fg: light-dark(hsl(48 100% 24%), hsl(48 100% 60%));
    --status-warn-bg: light-dark(hsl(48 100% 50% / .2), hsl(48 100% 50% / .10));
    --status-warn-edge: light-dark(hsl(48 100% 40% / .7), hsl(48 100% 55% / .55));
    --status-error-fg: light-dark(hsl(345 100% 34%), hsl(345 100% 66%));
    --status-error-bg: light-dark(hsl(345 100% 50% / .12), hsl(345 100% 50% / .12));
    --status-error-edge: light-dark(hsl(345 100% 45% / .7), hsl(345 100% 55% / .55));
    --status-neutral-fg: light-dark(hsl(222 12% 28%), hsl(222 10% 68%));
    --status-neutral-bg: light-dark(hsl(222 12% 40% / .1), hsl(222 10% 55% / .1));
    --status-neutral-edge: light-dark(hsl(222 12% 40% / .5), hsl(222 10% 55% / .45));

    /* background layers (hue vars are randomized per page load by JS) */
    --bg-grid-line: light-dark(
        hsl(215 35% 25% / .18),
        hsl(var(--hue, 196) 100% 62% / .28)
    );
    --bg-scanline: light-dark(hsl(230 40% 15% / .05), hsl(0 0% 0% / .22));
    --bg-blob-a: light-dark(.08, .14);

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
    letter-spacing: .05em;
}

a {
    color: var(--theme-accent);
}

::selection {
    background: var(--theme-accent-2);
    color: white;
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
        radial-gradient(130% 100% at 50% 0%, transparent 55%, light-dark(hsl(220 40% 45% / .12), hsl(245 60% 2% / .9)) 100%),
        var(--theme-canvas);
}

/* horizon glow line at the grid's vanishing edge */
.bg::before {
    content: "";
    position: absolute;
    top: calc(36% - 1px);
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg,
        transparent 4%,
        hsl(var(--hue-2, 315) 100% 60% / .45),
        hsl(var(--hue, 196) 100% 60% / .45),
        transparent 96%);
    filter: drop-shadow(0 0 8px hsl(var(--hue, 196) 100% 60% / .55));
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
    background: radial-gradient(circle at 50% 50%, hsl(var(--hue, 196) 100% 60% / var(--bg-blob-a)), transparent 65%);
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
    background: radial-gradient(circle at 50% 50%, hsl(calc(var(--hue, 196) + 40) 90% 55% / calc(var(--bg-blob-a) * .8)), transparent 65%);
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
    background: linear-gradient(to bottom, transparent, hsl(var(--hue, 196) 100% 72% / .06), transparent);
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
        3px 0 0 color-mix(in srgb, var(--magenta-neon), transparent 35%),
        -3px 0 0 color-mix(in srgb, var(--cyan-neon), transparent 35%),
        0 0 16px light-dark(transparent, hsl(196 100% 60% / .45));
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

/* blinking terminal cursor after section titles */
main h2::after {
    content: "_";
    color: var(--theme-accent);
    margin-left: .12em;
}

/* ---- HUD panels (cards / readme / popover) ---- */

/* corner brackets shared by all HUD panels */
.card::before,
main .readme::before,
.popover-dialog::before {
    content: "";
    position: absolute;
    inset: 5px;
    pointer-events: none;
    background:
        linear-gradient(var(--theme-accent), var(--theme-accent)) top left / 16px 1px,
        linear-gradient(var(--theme-accent), var(--theme-accent)) top left / 1px 16px,
        linear-gradient(var(--theme-accent), var(--theme-accent)) bottom right / 16px 1px,
        linear-gradient(var(--theme-accent), var(--theme-accent)) bottom right / 1px 16px;
    background-repeat: no-repeat;
    opacity: .65;
}

/* readme panel */
main .readme {
    position: relative;
    margin: .5rem auto 1rem;
    padding: 1rem 1.5rem;
    max-width: 72rem;
    text-align: left;
    border: 1px solid var(--theme-edge);
    clip-path: var(--cut-pop);
    background: var(--theme-panel);
    filter: drop-shadow(var(--shadow-glow));
}

main .cards-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    counter-reset: hud-card;
}

/* ---- cards ---- */

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
    border: 1px solid var(--theme-edge);
    clip-path: var(--cut-card);
    background: var(--theme-panel);
    filter: drop-shadow(var(--shadow-glow));
}

/* HUD index tag */
.card::after {
    content: counter(hud-card, decimal-leading-zero);
    counter-increment: hud-card;
    position: absolute;
    top: 1.5rem;
    right: 1.2rem;
    font-family: var(--font-pixel);
    font-size: .68rem;
    letter-spacing: .18em;
    color: var(--theme-accent);
    opacity: .85;
}

.card:hover {
    border-color: var(--theme-edge-strong);
    filter: drop-shadow(var(--shadow-glow-strong)) drop-shadow(var(--shadow-glow-magenta));
}

.card h2 {
    margin-top: 1.6rem;
    padding-bottom: .5rem;
    border-bottom: 1px solid color-mix(in srgb, var(--theme-accent), transparent 60%);
}

.card:hover h2 {
    color: var(--theme-accent);
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

/* ---- status badges: angular HUD chips ---- */

[data-status] {
    display: inline-block;
    padding: .1rem .55rem;
    clip-path: var(--cut-tag);
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

/* ---- buttons: neon gradient frame ---- */

.button {
    background:
        linear-gradient(var(--btn-face), var(--btn-face)) padding-box,
        var(--grad-neon) border-box;
    border: 2px solid transparent;
    border-radius: 2px;
    color: var(--btn-text);
    padding: .5rem 1.2rem;
    text-decoration: none;
    display: inline-block;
    margin-top: .5rem;
    font-size: .95rem;
    cursor: pointer;
    transition:
        color .3s ease-out,
        translate .3s var(--bounce),
        filter .3s ease-out;
}

.button:hover,
.button:focus-visible {
    color: var(--theme-accent);
    translate: 0 -1px;
    filter: drop-shadow(0 0 10px light-dark(transparent, hsl(196 100% 60% / .45)));
}

.button:active {
    translate: 0 1px;
}

/* ---- popover ---- */

.popover-dialog {
    padding: 1rem 1.25rem 2rem 1.25rem;
    border: 1px solid var(--theme-edge-strong);
    clip-path: var(--cut-pop);
    color: var(--theme-text);
    background: var(--theme-panel-2);
    filter: drop-shadow(var(--shadow-glow-strong)) drop-shadow(var(--shadow-glow-magenta));
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
    background-color: light-dark(hsl(220 30% 45% / .25), hsl(245 45% 2% / .65));
    -webkit-backdrop-filter: blur(14px);
    backdrop-filter: blur(14px);
}

.popover-dialog h3 {
    color: var(--theme-accent);
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
    border: 1px solid var(--theme-edge-strong);
    clip-path: var(--cut-tag);
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
    line-height: 1.5rem;
    padding: 0 .5rem 0 .5rem;
    margin: 1rem 1rem 0 0;
    background: var(--theme-panel);
    color: var(--btn-text);
    font-family: var(--font-pixel);
    cursor: pointer;
    transition:
        color .25s ease-out,
        translate .25s var(--bounce),
        filter .25s ease-out,
        background-color .25s ease-out;
}

.popover-dialog .popover-dialog-close-button:hover,
.popover-dialog .popover-dialog-close-button:focus-visible {
    color: var(--theme-accent);
    translate: 0 -1px;
    filter: drop-shadow(0 0 8px light-dark(transparent, hsl(196 100% 60% / .5)));
}

.popover-dialog .popover-dialog-close-button:active {
    translate: 0 1px;
}

/* ---- theme switcher (系统 / 亮色 / 暗色) ---- */

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
    border: 1px solid color-mix(in srgb, var(--theme-accent), transparent 55%);
    border-radius: 6px;
    corner-shape: notch;
    outline: 3px ridge color-mix(in srgb, var(--theme-accent), transparent 55%);
    outline-offset: 2px;
    background: color-mix(in srgb, var(--theme-panel), transparent 20%);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    color: var(--theme-text);
}

#color-scheme legend {
    font-size: .62rem;
    padding: 0 .5em;
    letter-spacing: .2em;
    color: color-mix(in srgb, var(--theme-accent), transparent 20%);
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
    outline: 1px solid color-mix(in srgb, var(--theme-text), transparent 50%);
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
    box-shadow: 0 0 10px light-dark(transparent, hsl(196 100% 60% / .5));
}

#color-scheme label:has(input:focus-visible) {
    outline: 2px solid color-mix(in srgb, var(--theme-accent), transparent 35%);
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

    /* theme + hover transitions */
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

    /* popover open/close (needs allow-discrete for display/overlay) */
    .popover-dialog {
        transition-property: opacity, transform, display, overlay, filter;
        transition-duration: .25s;
        transition-timing-function: ease-out;
        transition-behavior: allow-discrete;
    }

    /* Dynamic.css-style entries */
    header { animation: materialize .6s ease-out backwards; }

    main .readme { animation: come-in-left .55s ease-out .1s backwards; }

    main .cards-container .card { animation: .55s ease-out backwards; }
    main .cards-container .card:nth-of-type(odd) { animation-name: come-in-left; }
    main .cards-container .card:nth-of-type(even) { animation-name: come-in-right; }

    main .cards-container .card:nth-of-type(1) { animation-delay: .18s; }
    main .cards-container .card:nth-of-type(2) { animation-delay: .26s; }
    main .cards-container .card:nth-of-type(3) { animation-delay: .34s; }
    main .cards-container .card:nth-of-type(4) { animation-delay: .42s; }
    main .cards-container .card:nth-of-type(5) { animation-delay: .5s; }
    main .cards-container .card:nth-of-type(6) { animation-delay: .58s; }
    main .cards-container .card:nth-of-type(7) { animation-delay: .66s; }
    main .cards-container .card:nth-of-type(8) { animation-delay: .74s; }
    main .cards-container .card:nth-of-type(n+9) { animation-delay: .8s; }

    footer { animation: come-in-up .5s ease-out .3s backwards; }

    /* subtle glitch furniture */
    h1 { animation: h1-glitch 9s linear infinite; }

    main h2::after { animation: cursor-blink 1.1s linear infinite; }

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

@keyframes materialize {
    from {
        opacity: 0;
        transform: scale(1.05);
    }
}

@keyframes come-in-left {
    from {
        opacity: 0;
        transform: translateX(-42px);
    }
}

@keyframes come-in-right {
    from {
        opacity: 0;
        transform: translateX(42px);
    }
}

@keyframes come-in-up {
    from {
        opacity: 0;
        transform: translateY(14px);
    }
}

/* chromatic shadow jitter, brief window only */
@keyframes h1-glitch {
    0%, 91%, 97%, 100% {
        text-shadow:
            3px 0 0 color-mix(in srgb, var(--magenta-neon), transparent 35%),
            -3px 0 0 color-mix(in srgb, var(--cyan-neon), transparent 35%),
            0 0 16px light-dark(transparent, hsl(196 100% 60% / .45));
    }
    92% {
        text-shadow:
            1px 2px 0 var(--magenta-neon),
            -1px -2px 0 var(--cyan-neon),
            0 0 16px light-dark(transparent, hsl(196 100% 60% / .45));
    }
    94% {
        text-shadow:
            4px -1px 0 var(--magenta-neon),
            -4px 1px 0 var(--cyan-neon),
            0 0 16px light-dark(transparent, hsl(196 100% 60% / .45));
    }
}

@keyframes cursor-blink {
    0%, 49% { opacity: 1; }
    50%, 100% { opacity: 0; }
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
