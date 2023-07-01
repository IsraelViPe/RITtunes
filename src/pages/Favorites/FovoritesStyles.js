import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
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
