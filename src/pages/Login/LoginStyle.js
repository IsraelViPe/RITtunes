import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: var(--bg-color);
  user-select: none;

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    h1 {
      color: var(--text-color);
      font-size: 3em;
      font-family: var(--font-base);
      letter-spacing: 10px;
    }

    form {
      display: flex;
      gap: 1em;
      font-family: var(--font-base);
      font-size: 1.2rem;
      color: var(--text-color);
      justify-content: center;
      align-items: center;
      width: 80%;
    }
    label {
      align-items: center;
      display: flex;
      font-family: "Bayon", sans-serif;
      gap: 0.5rem;
    }

    input {
      font-size: 1.2rem;
      background-color: var(--pri-color);
      color: var(--text-color);
      outline: none;
      border: none;
      border-radius: 5px;
      letter-spacing: 1.5px;
      padding: 0.5rem;

      :placeholder-shown {
        color: var(--text-color);
        font-size: 1.2rem;
        background-color: var(--pri-color);
        opacity: 1;

      }
    }

    @media (max-width: 756px) {
      form {
        flex-direction: column;
      }
    }
  }

  .logo {
    width: 300px;
    height: 300px;
    img {
      border-radius: 50rem;
    }

    @media (max-width: 756px) {
      width: 250px;
      height: 250px;
    }
  }
`;

export const Button = styled.button`
  border-radius: 5px;
  width: 100px;
  appearance: none;
  background-color: var(--pri-color);
  color: var(--text-color);
  font-family: var(--font-base);
  border: none;
  padding: 0.5rem;
  font-size: 1.2rem;
  width: 200px;
  cursor: pointer;

  :disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:hover {
    opacity: 0.8;
  }
`;
