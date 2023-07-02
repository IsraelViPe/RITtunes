import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Loading from '../../components/Loading';
import { getUser, updateUser } from '../../services/userAPI';
import { Container, Form } from './ProfileEditStyles';

export default class ProfileEdit extends Component {
  state = {
    loading: false,
    clickSubmit: false,
    editedName: '',
    editedEmail: '',
    editedDescription: '',
    editedImage: '',

  };

  componentDidMount() {
    const fetchUser = async () => {
      this.setState({
        loading: true,
      });
      const requesUserInfo = await getUser();
      this.setState({
        editedName: requesUserInfo.name,
        editedEmail: requesUserInfo.email,
        editedDescription: requesUserInfo.description,
        editedImage: 'url da imagem',
        loading: false,
      });
    };
    fetchUser();
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  };

  submitProfile = () => {
    this.setState({
      loading: true,
      clickSubmit: true,
    }, async () => {
      const { editedName, editedEmail, editedDescription,
        editedImage } = this.state;
      const perfilUpdate = {
        name: editedName,
        email: editedEmail,
        image: editedImage,
        description: editedDescription,
      };

      await updateUser(perfilUpdate);
      this.setState({
        loading: false,
      });
    });
  };

  render() {
    const { clickSubmit, editedName, editedEmail,
      editedDescription, editedImage, loading } = this.state;
    const emailValidateRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    const perfilForm = (
      <Form>
        <label
          htmlFor="name"
        >
          Nome:
          <input
            name="editedName"
            value={ editedName }
            onChange={ this.handleChange }
            data-testid="edit-input-name"
            type="text"
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            name="editedEmail"
            value={ editedEmail }
            onChange={ this.handleChange }
            data-testid="edit-input-email"
            type="email"
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <textarea
            maxLength="90"
            data-testid="edit-input-description"
            name="editedDescription"
            value={ editedDescription }
            onChange={ this.handleChange }
            id="description"
            cols="30"
            rows="3"
          />
        </label>
        <label htmlFor="foto">
          Foto:
          <input
            name="editedImage"
            value={ editedImage }
            onChange={ this.handleChange }
            data-testid="edit-input-image"
            type="text"
          />
        </label>
        <button
          onClick={ this.submitProfile }
          type="button"
          disabled={ !editedName || !editedDescription
            || !editedImage || (!editedEmail || !emailValidateRegex.test(editedEmail)) }
          data-testid="edit-button-save"
        >
          Salvar
        </button>
      </Form>
    );
    return (
      <Container data-testid="page-profile-edit">
        <h2>Editar Perfil</h2>
        {loading ? <Loading /> : perfilForm}
        {loading && clickSubmit && <Loading /> }
        {clickSubmit && !loading && <Redirect to="/profile" />}
      </Container>

    );
  }
}
