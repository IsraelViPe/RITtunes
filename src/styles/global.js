import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`

:root {
    --font-base: 'Bayon',sans-serif;

    --text-color: white;
    --bg-color: #111118;
    --pri-color: rgba(102, 101, 101, 0.808);
    --sec-color: #FFC814;
    --destak: #FF0000;
}

html {
    font-family: var(--font-base);
    color: var(--text-color)
}
`;

export default Global;
