import React, { Component } from 'react';
import CardAlbum from '../components/CardAlbum';
import Header from '../components/Header';
import Loading from '../components/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

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
    const fetchAlbuns = await searchAlbumsAPI(searchField);
    this.setState({
      fetchClicked: false,
      responseAPI: true,
      statusAPI: fetchAlbuns.length !== 0,
      listAlbuns: await fetchAlbuns,
    });
    console.log(fetchAlbuns);
  };

  render() {
    const minSearchLenght = 2;
    const { artistSearched, searchField, listAlbuns,
      fetchClicked, responseAPI, statusAPI } = this.state;

    const noAlbuns = (
      <h1>Nenhum álbum foi encontrado</h1>
    );

    const albunsRender = (
      <div>
        <h1>
          Resultado de álbuns de:
          {' '}
          { artistSearched }
        </h1>
        { listAlbuns
          .map(({ collectionName, artistName, artworkUrl100, collectionId }) => (
            <CardAlbum
              key={ collectionId }
              collectionName={ collectionName }
              artistName={ artistName }
              artworkUrl100={ artworkUrl100 }
              collectionId={ collectionId }
            />))}
      </div>
    );
    const formSearch = (
      <form>
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
      </form>
    );
    return (
      <div>
        <Header />

        <div data-testid="page-search">
          {fetchClicked ? <Loading /> : formSearch }
          {responseAPI && statusAPI ? albunsRender : noAlbuns }
        </div>
      </div>
    );
  }
}
