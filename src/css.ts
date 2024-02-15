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
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.card {
    min-width: 300px;
    max-width: 100%;
    width: 25%;

    min-height: 250px;
    max-height: 100%;
    height: auto;

    margin: 3rem;
    padding: 0rem 2rem 2rem 2rem;

    border-radius: 2rem;

    /* glossed glass */
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    
}

/* Info styles */
.card .info {
    margin-bottom: 1.5rem;
}

/* Button styles */
.card .button {
    background-color: #ccc;
    color: #333;
    padding: .5rem 1rem;
    border-radius: .5rem;
    text-decoration: none;
    display: inline-block;
    margin-top: .5rem;
}

.card .button:hover {
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