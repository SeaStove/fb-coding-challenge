import React, { Component } from "react";
import PropTypes from "prop-types";
import { Image, Header, Grid, Segment } from "semantic-ui-react";

function getAge(birthDateString) {
  var today = new Date();
  var birthDate = new Date(birthDateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

//Some of the artists dont have middle names
function getFullName(firstName, middleName, lastName) {
  if (middleName) {
    return firstName + " " + middleName + " " + lastName;
  } else {
    return firstName + " " + lastName;
  }
}

export class ArtistDetails extends Component {
  render() {
    const {
      firstName,
      lastName,
      middleName,
      art,
      imageURL,
      dateOfBirth,
      placeOfBirth
    } = this.props.selectedArtist;
    return (
      <div className="artist-details">
        <Segment
          textAlign="center"
          raised
          style={{
            display:
              this.props.loading || this.props.loadingFailed ? "none" : "block"
          }}
        >
          <Grid>
            <Grid.Column>
              <Image src={imageURL} size="medium" rounded centered />
              <Header>{getFullName(firstName, middleName, lastName)}</Header>
              <p className="art">{art}</p>
              <p>{dateOfBirth + " (Age " + getAge(dateOfBirth) + ")"}</p>
              <p>{"Born in " + placeOfBirth}</p>
            </Grid.Column>
          </Grid>
        </Segment>
      </div>
    );
  }
}
ArtistDetails.propTypes = {
  selectedArtist: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  loadingFailed: PropTypes.bool.isRequired
};

export default ArtistDetails;
