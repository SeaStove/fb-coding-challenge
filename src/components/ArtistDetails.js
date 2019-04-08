import React, { Component } from "react";
import PropTypes from "prop-types";
import { Image, Header, Grid, Segment } from "semantic-ui-react";

export class ArtistDetails extends Component {
  render() {
    const {
      firstName,
      lastName,
      art,
      imageURL,
      dateOfBirth,
      placeOfBirth
    } = this.props.artist;
    return (
      <div className="artist-details">
        <Segment textAlign="center" raised centered>
          <Grid>
            <Grid.Column>
              <Image src={imageURL} size="medium" rounded centered />
              <Header>{firstName + " " + lastName}</Header>
              <p>{art}</p>
              <p>
                {dateOfBirth + " (Age " + this.props.getAge(dateOfBirth) + ")"}
              </p>
              <p>{"Born in " + placeOfBirth}</p>
            </Grid.Column>
          </Grid>
        </Segment>
      </div>
    );
  }
}
ArtistDetails.propTypes = {
  artist: PropTypes.object.isRequired,
  getAge: PropTypes.func.isRequired
};

export default ArtistDetails;
