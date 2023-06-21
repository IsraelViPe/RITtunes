import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import { Container, Logo, Button } from '../styles/login';
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
      <Container data-testid="page-login">
        <div className="main">
          { clicked && <Loading /> }
          { redirect && <Redirect to="/search" /> }
          <Logo>
            <div className="disc">
              <div className="disc2">
                <div className="name">R!t</div>
              </div>
            </div>
          </Logo>
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
            <Button
              className="button"
              disabled={ inputName.length < minInputlenght }
              type="button"
              onClick={ this.handleClick }
              data-testid="login-submit-button"
            >
              Entrar
            </Button>
          </form>
        </div>

      </Container>
    );
  }
}
