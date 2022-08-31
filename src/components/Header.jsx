import React, { Component } from 'react';
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
    console.log(user);
    return (
      <header data-testid="header-component">
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
