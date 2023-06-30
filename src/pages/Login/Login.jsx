import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../../services/userAPI';
import { Container, Button } from './LoginStyle';
import Loading from '../../components/Loading';
import images from '../../assets/images';

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
      <>
        { clicked && <Loading /> }
        { !clicked && <Container data-testid="page-login">
          <div className="main">
            { redirect && <Redirect to="/search" /> }
            <h1>Login</h1>
            <div className="logo"><img src={ images.logo } alt="logotipo" /></div>
            <form>
              <label htmlFor="name">
                <input
                  onChange={ this.handleInput }
                  data-testid="login-name-input"
                  placeholder="Login Name "
                  name="inputName"
                  type="text"
                />
              </label>
              <Button
                disabled={ inputName.length < minInputlenght }
                type="button"
                onClick={ this.handleClick }
                data-testid="login-submit-button"
              >
                Entrar
              </Button>
            </form>
          </div>

        </Container>}
      </>
    );
  }
}
