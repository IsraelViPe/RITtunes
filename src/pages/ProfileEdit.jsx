import React, { Component } from 'react';
import Header from '../components/Header';
import { getUser } from '../services/userAPI';

export default class ProfileEdit extends Component {
  state = {
    loading: false,
    userInfo: {},
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
        userInfo: requesUserInfo,
      }, () => {
        this.setState({
          editedName: requesUserInfo.name,
          editedEmail: requesUserInfo.email,
          editedDescription: requesUserInfo.description,
          editedImage: requesUserInfo.image,
          loading: false,
        });
      });
    };
    fetchUser();
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { userInfo, editedName, editedEmail,
      editedDescription, editedImage } = this.state;
    const perfilForm = (
      <form>
        <label htmlFor="name">
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
            data-testid="edit-input-description"
            name="editedDescription"
            value={ editedDescription }
            onChange={ this.handleChange }
            id="description"
            cols="30"
            rows="10"
          />
        </label>
        <label htmlFor="foto">
          Foto:
          <input
            name="editedImage"
            value={ editedImage }
            onChange={ this.handleChange }
            data-testid="edit-input-image"
            type="file"
          />
        </label>
        <button
          type="button"
          // disabled={}
          data-testid="edit-button-save"
        >
          Salvar
        </button>
      </form>
    );
    return (
      <div>
        <Header />
        <div data-testid="page-profile-edit">
          <h1>Editar Perfil</h1>
          {perfilForm}
        </div>
      </div>
    );
  }
}
