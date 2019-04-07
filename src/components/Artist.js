import React, { Component } from "react";
import PropTypes from "prop-types";

export class Artist extends Component {

  render() {
    const { artistID, firstName, lastName, imageURL, art } = this.props.artistInfo;
    return (
      <div style={this.getStyle()}>
        <img src={imageURL}></img>
        <h3 style={{float:'right'}}>{firstName + " " + lastName}</h3>
        <h4 style={{float:'right'}}>{art}</h4>
      </div>
    );
  }
}

//PropTypes
Artist.propTypes = {
  artistInfo: PropTypes.object.isRequired
};

export default Artist;
