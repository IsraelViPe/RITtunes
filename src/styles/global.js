import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`

:root {
    --font-base: 'Bayon',sans-serif;
    --font-text: Verdana, Geneva, Tahoma, sans-serif;

    --text-color: white;
    --bg-color: #181818;
    --pri-color: rgba(102, 101, 101, 0.308);
    --sec-color: #FFC814;
    --destak: #FF0000;
}

html {
    font-family: var(--font-base);
    color: var(--text-color)
}
`;

export default Global;
