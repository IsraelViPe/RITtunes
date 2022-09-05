import React, { Component } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';

export default class Favorites extends Component {
  state = {
    loading: false,
    favoriteMusics: [],
  };

  componentDidMount() {
    const fetchFavorites = async () => {
      this.setState({
        loading: true,
      });
      const requestFavoriteMusics = await getFavoriteSongs();
      this.setState({
        favoriteMusics: requestFavoriteMusics,
        loading: false,
      });
    };

    fetchFavorites();
  }

  removeFavorite = async ({ target: { id } }) => {
    console.log(id);
    const { favoriteMusics } = this.state;
    this.setState({
      loading: true,
    });
    const selectRemove = favoriteMusics
      .find(({ trackId }) => Number(id) === trackId);
    await removeSong(selectRemove);
    this.setState({
      loading: false,
      favoriteMusics: await getFavoriteSongs(),
    });
  };

  render() {
    const { favoriteMusics, loading } = this.state;
    return (
      <div>
        <Header />
        <div data-testid="page-favorites">
          <h1>Favorites</h1>
          { loading ? <Loading />
            : favoriteMusics
              .map((element) => (
                <>
                  <MusicCard
                    key={ element.trackId }
                    { ...element }
                    handleCLickFavorite={ this.removeFavorite }
                    checked
                  />
                  {/* <button
                    id={ element.trackId }
                    type="button"

                  >
                    Excluir
                  </button> */}
                </>
              )) }
        </div>
      </div>
    );
  }
}
