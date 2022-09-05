import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';
import { addSong } from '../services/favoriteSongsAPI';
import Loading from '../components/Loading';

export default class Album extends Component {
  state = {
    albunInfo: [],
    musicList: [],
    loading: false,
    favoritesList: [],
  };

  componentDidMount() {
    this.fetchAPI();
  }

  handleCLickFavorite = async ({ target: { id, checked } }) => {
    this.setState({
      loading: true,
    });
    const { musicList, favoritesList } = this.state;
    const favoritedMusic = musicList
      .find(({ trackId }) => Number(id) === trackId);
    const isChecked = favoritesList
      .some(({ trackId }) => Number(id) === trackId);

    await addSong(favoritedMusic);
    this.setState((prevState) => ({
      favoritesList: [...prevState.favoritesList, favoritedMusic],
    }));

    if (!checked) {
      const deleteFavorite = favoritesList
        .filter(({ trackId }) => trackId !== Number(id));
      this.setState({
        favoritesList: deleteFavorite,
      });
      console.log(deleteFavorite, checked);
    }
    this.setState({
      loading: false,
    });
  };

  // componentDidUpdate() {
  //   this.handleFavorite = async ({ target: { id, checked } }) => {
  //     this.setState({
  //       loading: true,
  //     });
  //     const { musicList, favoritesList } = this.state;
  //     const favoritedMusic = musicList
  //       .find(({ trackId }) => Number(id) === trackId);
  //     const isChecked = favoritesList
  //       .some(({ trackId }) => Number(id) === trackId);

  //     await addSong(favoritedMusic);
  //     this.setState((prevState) => ({
  //       favoritesList: [...prevState.favoritesList, favoritedMusic],
  //     }));

  //     if (!checked) {
  //       const deleteFavorite = favoritesList
  //         .filter(({ trackId }) => trackId !== Number(id));
  //       this.setState({
  //         favoritesList: deleteFavorite,
  //       });
  //       console.log(deleteFavorite, checked);
  //     }
  //     this.setState({
  //       loading: false,
  //     });
  //   };
  // }

  fetchAPI = async () => {
    const { match: { params: { id } } } = this.props;
    const musicRequest = await getMusics(id);
    this.setState({
      albunInfo: await musicRequest[0],
      musicList: await musicRequest,
    });
  };

  render() {
    const { albunInfo, musicList, loading, favoritesList } = this.state;
    const { artistName, collectionName, artworkUrl60 } = albunInfo;
    return (
      <div>
        <Header />
        {loading ? <Loading /> : (
          <div data-testid="page-album">
            <div>
              <div>
                <img src={ artworkUrl60 } alt={ collectionName } />
              </div>
              <h3 data-testid="album-name">
                { collectionName }
              </h3>
              <h4 data-testid="artist-name">
                { artistName }
              </h4>
            </div>
            { musicList
              .map(({ trackName, previewUrl, trackId }, index) => index > 0 && (<MusicCard
                key={ trackId }
                trackName={ trackName }
                previewUrl={ previewUrl }
                trackId={ trackId }
                handleCLickFavorite={ this.handleCLickFavorite }
                handleFavorite={ this.handleFavorite }
                checked={ favoritesList
                  .some((element) => element.trackId === trackId) }
              />))}
          </div>) }

      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
