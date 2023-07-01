import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  overflow: hidden;
  cursor: pointer;
  border-radius: 50rem;
  background-color: black;
  box-shadow: 0 2px 5px var(--pri-color);

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 756px) {
    width: 200px;
    height: 200px;
  }
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  font-family: var(--font-text);
  font-size: small;

  span {
    text-align: center;
  }

`;

const AlbumLink = styled(Link)`
  color: var(--sec-color);
  font-size: small;
  text-align: center;
  width: 60px;
  background-color: var(--destak);
  font-weight: bolder;
  padding: 0.3rem;
  border-radius: 5%;
  text-decoration: none;
  outline: none;

  @media (max-width: 756px) {
    padding: 0.2rem;
  }
`;

const CardImg = styled.div`
  border-radius: 50rem;
  box-shadow: 0 2px 5px var(--pri-color);
  img {
    border-radius: 50rem;
    object-fit: cover;
  }
`;

export default class CardAlbum extends Component {
  render() {
    const MAX_LEN_INFO = 144;
    const { collectionName, artistName, artworkUrl100, collectionId } = this.props;
    return (
      <Card>
        <CardImg>
          <img src={ artworkUrl100 } alt={ artistName } />
        </CardImg>
        <CardInfo>
          <span
            style={ {
              display: collectionName.length > MAX_LEN_INFO ? 'none' : 'inline',
            } }
          >
            {collectionName}
          </span>
          <span>{artistName}</span>
          <AlbumLink
            data-testid={ `link-to-album-${collectionId}` }
            to={ `album/${collectionId}` }
          >
            visitar
          </AlbumLink>
        </CardInfo>
      </Card>
    );
  }
}

CardAlbum.propTypes = {
  collectionName: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  artworkUrl100: PropTypes.string.isRequired,
  collectionId: PropTypes.number.isRequired,
};
