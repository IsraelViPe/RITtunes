import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: var(--bg-color);

    div {
       h2 {
        margin-top: 8rem;
        text-align: center;
       }
    }
`;

export default Container;
