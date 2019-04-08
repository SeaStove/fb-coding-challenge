import React, { Component } from "react";
import Artist from "./Artist";
import PropTypes from "prop-types";

class ArtistList extends Component {
  render() {
    return this.props.artists.map(artist => (
      <Artist artist={artist} key={artist.artistID} />
    ));
  }
}

//PropTypes
ArtistList.propTypes = {
  artists: PropTypes.array.isRequired
};

export default ArtistList;
