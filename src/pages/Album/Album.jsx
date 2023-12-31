import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MusicCard from '../../components/MusicCard';
import getMusics from '../../services/musicsAPI';
import { addSong, getFavoriteSongs, removeSong } from '../../services/favoriteSongsAPI';
import Loading from '../../components/Loading';
import { PageAlbum, Container, ContainerInfo, ImageContainer } from './AlbumStyle';

export default class Album extends Component {
  state = {
    albunInfo: [],
    musicList: [],
    loading: false,
    favoritesList: [],
  };

  componentDidMount() {
    this.fetchAPI();
    this.fetchFavorites();
  }

  handleCLickFavorite = async ({ target: { id, checked } }) => {
    this.setState({
      loading: true,
    });
    const { musicList, favoritesList } = this.state;
    const favoritedMusic = musicList
      .find(({ trackId }) => Number(id) === trackId);

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
      await this.fetchRemove(favoritedMusic);
    }
    this.setState({
      loading: false,
    });
  };

  fetchAPI = async () => {
    const { match: { params: { id } } } = this.props;
    const musicRequest = await getMusics(id);
    this.setState({
      albunInfo: await musicRequest[0],
      musicList: await musicRequest,
    });
  };

  fetchFavorites = async () => {
    this.setState({
      loading: true,
    });
    const favoritesStorage = await getFavoriteSongs();
    this.setState({
      loading: false,
      favoritesList: favoritesStorage,
    });
  };

  fetchRemove = async (music) => {
    this.setState({
      loading: true,
    });
    await removeSong(music);
    this.setState({
      loading: false,
    });
  };

  render() {
    const { albunInfo, musicList, loading, favoritesList } = this.state;
    const { artistName, collectionName, artworkUrl60 } = albunInfo;
    return (
      <Container>
        {loading ? <Loading /> : (
          <PageAlbum PageAlbum data-testid="page-album">
            <ContainerInfo>
              <ImageContainer>
                <img src={ artworkUrl60 } alt={ collectionName } />
              </ImageContainer>
              <h4 data-testid="artist-name">
                { artistName }
              </h4>
              <p data-testid="album-name">
                { collectionName }
              </p>
            </ContainerInfo>
            { musicList
              .map(({ trackName, previewUrl, trackId }, index) => index > 0 && (<MusicCard
                key={ trackId }
                trackName={ trackName }
                previewUrl={ previewUrl }
                trackId={ trackId }
                handleCLickFavorite={ this.handleCLickFavorite }
                checked={ favoritesList
                  .some((element) => element.trackId === trackId) }
              />))}
          </PageAlbum>) }

      </Container>
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
