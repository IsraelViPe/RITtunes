import React, { Component } from 'react';
import Loading from '../../components/Loading';
import MusicCard from '../../components/MusicCard';
import { getFavoriteSongs, removeSong } from '../../services/favoriteSongsAPI';
import Container from './FovoritesStyles';

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
    console.log(favoriteMusics);
    return (
      <Container data-testid="page-favorites">
        <div>
          <h2>Favoritas</h2>
          { loading ? <Loading />
            : favoriteMusics
              ?.map((element) => (
                <MusicCard
                  key={ element.trackId }
                  { ...element }
                  handleCLickFavorite={ this.removeFavorite }
                  checked
                />
              )) }
        </div>
      </Container>
    );
  }
}
