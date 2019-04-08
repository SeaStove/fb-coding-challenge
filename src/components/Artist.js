import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, Image } from "semantic-ui-react";

export class Artist extends Component {
  render() {
    const { firstName, lastName, art, imageURL } = this.props.artist;
    return (
      <div className="artist">
        <Card fluid href="#card-example-link-card">
          <Card.Content>
            <Image floated="left" size="mini" src={imageURL} circular />
            <Card.Header>{firstName + " " + lastName} </Card.Header>
            <Card.Meta>{art}</Card.Meta>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

//PropTypes
Artist.propTypes = {
  artist: PropTypes.object.isRequired
};

export default Artist;
