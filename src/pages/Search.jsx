import React, { Component } from 'react';
import Header from '../components/Header';

export default class Search extends Component {
  state = {
    searchField: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({
      searchField: value,
    });
  };

  render() {
    const minSearchLenght = 2;
    const { searchField } = this.state;
    return (
      <div>
        <Header />
        <div data-testid="page-search">
          <form>
            <input
              data-testid="search-artist-input"
              name="searchField"
              placeholder="Nome do Artísta"
              onChange={ this.handleChange }
              type="text"
            />
            <button
              disabled={ searchField.length < minSearchLenght }
              data-testid="search-artist-button"
              type="button"
            >
              Pesquisar
            </button>
          </form>
        </div>
      </div>
    );
  }
}
