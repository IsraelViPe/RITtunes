import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getUser } from '../services/userAPI';
import images from '../assets/images';

const HeaderNav = styled.header`
  display: flex;
  position: fixed;
  justify-content: center;
  gap: 3rem;
  align-items: center;
  background-color: black;
  width: 100%;
  z-index: 10;

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  li {
    list-style: none;
    padding: 0.8rem;
  }

  @media (max-width: 756px) {
    gap: 0.5rem;
  }
`;

const NavLink = styled(Link)`
  color: var(--sec-color);
  font-size: 1.5rem;
  text-decoration: none;
  outline: none;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 756px) {
    font-size: 1rem;
  }
`;

const MiniLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
  width: 100px;
  height: 100px;

  p {
    font-size: 0.9rem;
    text-align: center;
    color: var(--text-color);
  }

  @media (max-width: 756px) {
    flex-direction: column;
    p {
      display: none;
    }
  }
`;

class Header extends Component {
  state = {
    user: {},
  };

  async componentDidMount() {
    const userObj = await getUser();
    this.setState({
      user: await userObj,
    });
  }

  render() {
    const { user } = this.state;
    const { location: { pathname } } = this.props;
    if (pathname !== '/') {
      return (
        <HeaderNav data-testid="header-component">
          <MiniLogo>
            <img src={ images.logo } alt="logo" />
            <p data-testid="header-user-name">
              {' '}
              {user.name}
              {' '}
            </p>
          </MiniLogo>
          <nav>
            <li>
              <NavLink data-testid="link-to-search" to="/search">
                Pesquisa
              </NavLink>
            </li>
            <li>
              <NavLink data-testid="link-to-favorites" to="/favorites">
                Favoritas
              </NavLink>
            </li>
            <li>
              <NavLink data-testid="link-to-profile" to="/profile">
                Perfil
              </NavLink>
            </li>
          </nav>
        </HeaderNav>
      );
    }
  }
}

export default withRouter(Header);

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
