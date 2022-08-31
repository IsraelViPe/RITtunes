import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

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
      <header data-testid="header-component">
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

      </header>
    );
  }
}
