import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getUser } from '../services/userAPI';
import { Logo } from '../styles/login';
import Loading from './Loading';

const HeaderNav = styled.header`
  border: solid 1px white;
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 100%;

  nav {
    /* display: flex; */
    align-items: center;
    justify-content: space-evenly;
  }

  p {
    color : white;
  }
  
  
`;

export default class Header extends Component {
  state = {
    user: {},
    loading: true,
  };

  async componentDidMount() {
    const userObj = await getUser();
    this.setState({
      user: await userObj,
      loading: false,
    });
  }

  render() {
    const { user, loading } = this.state;
    return (
      <HeaderNav data-testid="header-component">
        <Logo>
          <div className="disc">
            <div className="disc2">
              <div className="name">R!t</div>
            </div>
          </div>
        </Logo>
        <nav>
          <li>
            <Link
              data-testid="link-to-search"
              to="/search"
            >
              Pesquisa

            </Link>
          </li>
          <li>
            <Link
              data-testid="link-to-favorites"
              to="/favorites"
            >
              Favoritos

            </Link>
          </li>
          <li>
            <Link
              data-testid="link-to-profile"
              to="/profile"
            >
              Perfil

            </Link>
          </li>
        </nav>
        { loading ? <Loading /> : (
          <p data-testid="header-user-name">
            {' '}
            {user.name}
            {' '}
          </p>
        )}

      </HeaderNav>
    );
  }
}
