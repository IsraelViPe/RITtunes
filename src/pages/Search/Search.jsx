import React, { Component } from 'react';
import CardAlbum from '../../components/CardAlbum';
import Loading from '../../components/Loading';
import searchAlbumsAPI from '../../services/searchAlbumsAPI';
import { Container, SearchForm, AlbunsList,
  CardContainer, NotFound } from './SearchStyle';

export default class Search extends Component {
  state = {
    searchField: '',
    artistSearched: '',
    responseAPI: false,
    statusAPI: false,
    fetchClicked: false,
    listAlbuns: [],
  };

  handleChange = ({ target: { value } }) => {
    this.setState({
      searchField: value,
    });
  };

  handleClickSearch = async () => {
    const { searchField } = this.state;
    this.setState({
      artistSearched: searchField,
      searchField: '',
      fetchClicked: true,
      responseAPI: false,
    });
    try {
      const fetchAlbuns = await searchAlbumsAPI(searchField);
      this.setState({
        fetchClicked: false,
        responseAPI: true,
        statusAPI: fetchAlbuns.length !== 0,
        listAlbuns: await fetchAlbuns,
      });
    } catch (e) {
      console.log(aqui);
      console.error(e);
    }
  };

  render() {
    const minSearchLenght = 2;
    const { artistSearched, searchField, listAlbuns,
      fetchClicked, responseAPI, statusAPI } = this.state;

    const noAlbuns = (
      <NotFound>Nenhum álbum foi encontrado</NotFound>
    );

    const albunsRender = (
      <AlbunsList>
        <h1>
          Resultado de Álbuns de:
          {' '}
          { artistSearched }
        </h1>
        <CardContainer>
          { listAlbuns
            .map(({ collectionName, artistName, artworkUrl100, collectionId }) => (
              <CardAlbum
                key={ collectionId }
                collectionName={ collectionName }
                artistName={ artistName }
                artworkUrl100={ artworkUrl100 }
                collectionId={ collectionId }
              />))}
        </CardContainer>
      </AlbunsList>
    );
    const formSearch = (
      <SearchForm>
        <input
          data-testid="search-artist-input"
          value={ searchField }
          name="searchField"
          placeholder="Nome do Artísta"
          onChange={ this.handleChange }
          type="text"
        />
        <button
          onClick={ this.handleClickSearch }
          disabled={ searchField.length < minSearchLenght }
          data-testid="search-artist-button"
          type="button"
        >
          Pesquisar
        </button>
      </SearchForm>
    );
    if (fetchClicked) return <Loading />;
    return (
      <Container Container data-testid="page-search">
        {formSearch }
        {responseAPI && statusAPI && albunsRender }
        {responseAPI && !statusAPI && noAlbuns}
      </Container>
    );
  }
}
