import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-color);

  div {
    @media (max-width: 756px) {
      flex-direction: column;
    }
  }

  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }
`;

export const PerfilCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 700px;
  gap: 2rem;

  background-color: var(--pri-color);
  padding: 3rem;
  border-radius: 50rem;

  div {
    display: flex;
    flex-direction: column;
    width: 90%;
    gap: 0.2rem;
    padding: 1rem;
    align-items: flex-start;
    p {
      text-align: center;
      font-size: small;
      font-family: var(--font-text);
      padding: 0.5rem;
      background-color: var(--bg-color);
      opacity: 0.7;
      border-radius: 5%;
    }

    @media (max-width: 756px) {
      align-items: center;
      h3 {
        font-size: 1rem;
      }
    }
  }

  @media (max-width: 756px) {
    width: 300px;
    padding: 2rem;
    gap: 1rem;
    border-radius: 5%;
  }
`;

export const ImgContainer = styled.div`
  width: 150px;
  height: 150px;
  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 5px;

    @media (max-width: 756px) {
      width: 100px;
      height: 100px;
    }
  }
`;

export const EditProfileLink = styled(Link)`
  background-color: var(--destak);
  border-radius: 50rem;
  color: var(--sec-color);
  margin-top: 0.7rem;
  padding: 0.5rem;
  cursor: pointer;
  text-decoration: none;
  outline: none;

  &:hover {
    opacity: 0.8;
  }
`;
