import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MusicCard extends Component {
  render() {
    const { trackName, previewUrl, trackId,
      handleCLickFavorite, checked } = this.props;
    return (
      <div>
        <p>{ trackName }</p>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          {' '}
          <code>audio</code>
          .
        </audio>
        <label htmlFor={ trackId }>
          Favorita
          <input
            data-testid={ `checkbox-music-${trackId}` }
            id={ trackId }
            onChange={ handleCLickFavorite }
            checked={ checked }
            type="checkbox"
          />
        </label>
      </div>
    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
  checked: PropTypes.bool.isRequired,
  handleCLickFavorite: PropTypes.func.isRequired,
};
