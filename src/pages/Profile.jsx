import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { getUser } from '../services/userAPI';

export default class Profile extends Component {
  state = {
    perfilInfo: {},
    loading: false,
  };

  componentDidMount() {
    const recoverPerfilInfos = async () => {
      this.setState({
        loading: true,
      });
      const requestPerfilInfo = await getUser();
      this.setState({
        perfilInfo: requestPerfilInfo,
        loading: false,
      });
    };
    recoverPerfilInfos();
  }

  render() {
    const { perfilInfo, loading } = this.state;
    const { name, image, email, description } = perfilInfo;
    return (
      <div>
        <Header />
        {loading ? <Loading /> : (
          <div data-testid="page-profile">
            <h1>Perfil</h1>
            <div>
              <div>
                <img
                  data-testid="profile-image"
                  src={ image }
                  alt={ name }
                />
              </div>
              <div>
                <h3>{ name }</h3>
                <p>{ email }</p>
                <p>{ description }</p>
              </div>
            </div>
            {/* <div> */}
            <Link to="/profile/edit">Editar perfil</Link>
            {/* </div> */}
          </div>
        )}
      </div>
    );
  }
}
