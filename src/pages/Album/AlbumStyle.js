import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: var(--bg-color);
`;

export const PageAlbum = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const ContainerInfo = styled.div`
    margin-top: 8rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ImageContainer = styled.div`
    padding: 1rem;
    img {
        border-radius: 5%;
    }
`;
