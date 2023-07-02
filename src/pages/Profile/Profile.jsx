import React, { Component } from 'react';

import Loading from '../../components/Loading';
import { getUser } from '../../services/userAPI';
import { Container, ImgContainer, PerfilCard, EditProfileLink } from './ProfileStyle';

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
    if (loading) return <Loading />;
    return (

      <Container data-testid="page-profile">
        <div>
          <h2>Perfil</h2>
          <PerfilCard>
            <ImgContainer>
              <img
                data-testid="profile-image"
                src={ image }
                alt={ name }
              />
            </ImgContainer>
            <div>
              <h3>{ name }</h3>
              <p>{ email }</p>
              <p>{ description }</p>
              <EditProfileLink to="/profile/edit">Editar perfil</EditProfileLink>
            </div>
          </PerfilCard>
        </div>
      </Container>

    );
  }
}
