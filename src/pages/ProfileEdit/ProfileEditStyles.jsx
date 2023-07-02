import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 100vh;

  background-color: var(--bg-color);

  h2 {
    margin-top: 8rem;
    margin-bottom: 1rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: var(--pri-color);
  border-radius: 5px;
  box-shadow: 0 2px 5px var(--pri-color);

  label {
    width: 80%;
    padding: 1rem;
  }

  input {
    font-family: var(--font-text);
    font-size: 0.8rem;
    background-color: var(--pri-color);
    color: var(--text-color);
    outline: none;
    border: none;
    border-radius: 5px;
    letter-spacing: 1.5px;
    margin-left: 0.3rem;
    padding: 0.5rem;
    opacity: 0.7;
  }

  textarea {
    font-family: var(--font-text);
    font-size: 0.8rem;
    background-color: var(--pri-color);
    color: var(--text-color);
    outline: none;
    border: none;
    border-radius: 5px;
    letter-spacing: 1.5px;
    margin-left: 0.3rem;
    padding: 0.5rem;
    opacity: 0.7;
    resize: none;
  }

  button {
    border-radius: 5px;
    width: 100px;
    appearance: none;
    margin-bottom: 1rem;
    background-color: var(--pri-color);
    color: var(--text-color);
    border: none;
    padding: 0.5rem;
    font-size: 0.8rem;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;
