import React, { Component } from "react";
import "./App.css";
import ArtistList from "./components/ArtistList.js";
import ArtistDetails from "./components/ArtistDetails";
import "semantic-ui-css/semantic.min.css";

// import axios from "axios";

class App extends Component {
  state = {
    artists: [
      {
        artistID: "827jshsg6736y34788478dh",
        firstName: "Quentin",
        lastName: "Tarantino",
        imageURL:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Quentin_Tarantino_by_Gage_Skidmore.jpg/896px-Quentin_Tarantino_by_Gage_Skidmore.jpg",
        art: "Direction",
        dateOfBirth: "27 March 1963",
        placeOfBirth: "Knoxville"
      },
      {
        artistID: "654jshsg6736y34788475s6",
        firstName: "Christopher",
        lastName: "Nolan",
        imageURL:
          "https://upload.wikimedia.org/wikipedia/commons/9/95/Christopher_Nolan_Cannes_2018.jpg",
        art: "Direction",
        dateOfBirth: "27 March 1963",
        placeOfBirth: "Knoxville"
      },
      {
        artistID: "02hfys64lbd784490hdbyt3",
        firstName: "Wesley",
        lastName: "Anderson",
        imageURL:
          "https://upload.wikimedia.org/wikipedia/commons/e/e7/Wes_Anderson-20140206-85.jpg",
        art: "Direction",
        dateOfBirth: "27 March 1963",
        placeOfBirth: "Knoxville"
      }
    ]
  };

  6;

  getAge(birthDateString) {
    var today = new Date();
    var birthDate = new Date(birthDateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  //The "art" field seems to not be capitalized
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  componentDidMount() {
    document.title = "Robert Stovall FB Challenge";
    // axios.get("https://fb-assessment.glitch.me/artists").then(res => this.setState({ artists: res.data }));
    // this.setState({
    //   artists: this.state.artists.map(artist => {
    //     this.capitalizeFirstLetter(artist.art);
    //     return artist;
    //   })
    // });
  }

  render() {
    return (
      <div className="App">
        <div className="grid-container">
          <div className="artists">
            <ArtistList artists={this.state.artists} />
          </div>
          <ArtistDetails getAge={this.getAge} artist={this.state.artists[0]} />
        </div>
      </div>
    );
  }
}

export default App;
