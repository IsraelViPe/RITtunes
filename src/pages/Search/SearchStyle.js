import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: var(--bg-color);
`;

export const SearchForm = styled.form`
  margin-top: 8rem;
  display: flex;
  width: 40%;
  gap: 1rem;
  justify-content: center;
  padding: 2rem;
  background-color: var(--pri-color);
  border-radius: 50rem;
  box-shadow: 0 2px 5px var(--pri-color);

  input {
    background-color: var(--pri-color);
    border-radius: 5px;
    outline: none;
    border: none;
    padding: 0.5rem;
    color: var(--text-color);
  }

  button {
    appearance: none;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      color: var(--text-color);
      opacity: 0.8;
    }
  }

  @media (max-width: 756px) {
    width: 90%;
    input {
      width: 60%;
    }
  }
`;

export const AlbunsList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  background-color: var(--bg-color);
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 3rem;

    @media (max-width: 756px) {
      font-size: 1.2rem;
    }
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 2rem;
  gap: 1.5rem;

`;
