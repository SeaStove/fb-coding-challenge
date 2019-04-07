import React, { Component } from "react";
import Artist from "./Artist";
import PropTypes from "prop-types";

class ArtistList extends Component {
  render() {
    return this.props.artists.map(artist => (
      <Artist></Artist>
    ));
  }
}

//PropTypes
ArtistList.propTypes = {
};

export default ArtistList;
