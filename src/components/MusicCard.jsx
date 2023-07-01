import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  width: 700px;
  background-color: var(--pri-color);
  border-radius: 50rem;
  padding: 3rem;
  margin: 1rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (max-width: 756px) {
    flex-direction: column;
    padding: 1rem;
     width: 350px;
    p {
      font-size: smaller;
      font-family: var(--font-text);
    }
    }
`;

const Like = styled.label`
  display: flex;
  gap: 0.5rem;
  cursor: pointer;

  &:hover {
    color: var(--destak);
    input {

    }
  }
`;

export default class MusicCard extends Component {
  render() {
    const { trackName, previewUrl, trackId,
      handleCLickFavorite, checked } = this.props;
    return (
      <Card>
        <p>{ trackName }</p>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          {' '}
          <code>audio</code>
          .
        </audio>
        <Like htmlFor={ trackId }>
          Favoritar
          <input
            data-testid={ `checkbox-music-${trackId}` }
            id={ trackId }
            onChange={ handleCLickFavorite }
            checked={ checked }
            type="checkbox"
          />
        </Like>
      </Card>
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
