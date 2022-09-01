import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class CardAlbum extends Component {
  render() {
    const { collectionName, artistName, artworkUrl100, collectionId } = this.props;
    return (
      <div>
        <div>
          <img src={ artworkUrl100 } alt={ artistName } />
        </div>
        <span>{ collectionName }</span>
        <span>{ artistName }</span>
        <Link
          data-testid={ `link-to-album-${collectionId}` }
          to={ `album/${collectionId}` }
        >
          Album
        </Link>
      </div>
    );
  }
}

CardAlbum.propTypes = {
  collectionName: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  artworkUrl100: PropTypes.string.isRequired,
  collectionId: PropTypes.number.isRequired,
};
