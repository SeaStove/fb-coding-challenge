import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, Image } from "semantic-ui-react";

export class Artist extends Component {
  getStyle = () => {
    if (
      this.props.selectedArtist !== undefined &&
      this.props.artist !== undefined
    ) {
      if (this.props.selectedArtist.artistID === this.props.artist.artistID) {
        return {
          backgroundColor: "#f4f4f4"
        };
      }
    }
  };
  render() {
    const { firstName, lastName, art, imageURL, artistID } = this.props.artist;
    return (
      <div className="artist">
        <Card
          fluid
          href="#"
          onClick={this.props.selectArtist.bind(this, artistID)}
          style={this.getStyle()}
        >
          <Card.Content>
            <Image floated="left" size="mini" src={imageURL} circular />
            <Card.Header>{firstName + " " + lastName} </Card.Header>
            <Card.Meta className="art">{art}</Card.Meta>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

//PropTypes
Artist.propTypes = {
  artist: PropTypes.object.isRequired,
  selectArtist: PropTypes.func.isRequired,
  selectedArtist: PropTypes.object.isRequired
};

export default Artist;
