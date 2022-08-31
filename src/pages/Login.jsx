import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';

export default class Login extends Component {
  state = {
    inputName: '',
    clicked: false,
    redirect: false,
  };

  handleClick = async () => {
    const { inputName } = this.state;
    this.setState({
      clicked: true,
    });
    await createUser({ name: inputName });
    this.setState({
      clicked: false,
      redirect: true,
    });
  };

  handleInput = ({ target: { value } }) => {
    this.setState({
      inputName: value,
    });
  };

  render() {
    const minInputlenght = 3;
    const { inputName, clicked, redirect } = this.state;
    return (
      <div data-testid="page-login">
        { clicked && <Loading /> }
        { redirect && <Redirect to="/search" /> }
        <h1>Login</h1>
        <form>
          <label htmlFor="name">
            Nome:
            <input
              onChange={ this.handleInput }
              data-testid="login-name-input"
              name="inputName"
              type="text"
            />
          </label>
          <button
            disabled={ inputName.length < minInputlenght }
            type="button"
            onClick={ this.handleClick }
            data-testid="login-submit-button"
          >
            Entrar
          </button>
        </form>

      </div>
    );
  }
}
