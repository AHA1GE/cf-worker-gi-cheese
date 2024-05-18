export const css = `
html {
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
}

body {
    overflow-x: hidden;
    overflow-y: auto;
    margin: 0px;
    padding: 0px;
    font-size: 1rem;
    width: 100vw;
    height: auto;
    background-color: #222222;
    color: #f1f1f1;
}

@media (prefers-color-scheme: light) {

    /* Light mode CSS styles */
    body {
        background-color: #f1f1f1;
        color: #222222;
    }
}

@media (prefers-color-scheme: dark) {

    /* Dark mode CSS styles */
    body {
        background-color: #222222;
        color: #f1f1f1;
    }
}

header {
    position: static;
    width: 100%;
    height: auto;
    text-align: center;
    margin: 1rem 0rem 1rem 0rem;
    padding: 0rem;
}

main {
    position: static;
    width: 100%;
    height: auto;
    text-align: center;
    margin: 1rem 0rem 1rem 0rem;
    padding: 0rem;
}

main .readme {
    margin: .5rem 1rem 1rem 1rem;
    padding: 1rem;
}

main .cards-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.card {
    min-width: 300px;
    max-width: 100%;
    width: 40%;

    min-height: 250px;
    max-height: 100%;
    height: auto;

    margin: 2rem 2.5rem 1rem 2.5rem;
    padding: 0rem 2rem 2rem 2rem;

    border-radius: 2rem;

    /* glossed glass */
    background: rgba(177, 177, 177, 0.5);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
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

.popover-dialog {
    padding: 1rem 1rem 2rem 1rem;
    border-radius: 1rem;
}

.popover-dialog::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
}

/* Button styles */
.button {
    background-color: #ccc;
    color: #333;
    padding: .5rem 1rem;
    border-radius: .5rem;
    text-decoration: none;
    display: inline-block;
    margin-top: .5rem;
}

.button:hover {
    background-color: #999;
    color: #fff;
}

footer {
    position: static;
    bottom: 0;
    width: 100%;
    height: auto;
    text-align: center;
    margin: 0rem 0rem 0rem 0rem;
    padding: 0rem;
}
`;