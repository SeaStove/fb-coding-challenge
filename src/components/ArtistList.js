import React, { Component } from "react";
import Artist from "./Artist";
import PropTypes from "prop-types";

class ArtistList extends Component {
  render() {
    return this.props.artists.map(artist => (
      <Artist
        artist={artist}
        key={artist.artistID}
        selectArtist={this.props.selectArtist}
        selectedArtist={this.props.selectedArtist}
      />
    ));
  }
}

//PropTypes
ArtistList.propTypes = {
  artists: PropTypes.array.isRequired,
  selectArtist: PropTypes.func.isRequired,
  selectedArtist: PropTypes.object.isRequired
};

export default ArtistList;
