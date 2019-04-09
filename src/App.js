import React, { Component } from "react";
import "./App.css";
import ArtistList from "./components/ArtistList.js";
import ArtistDetails from "./components/ArtistDetails";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";
import { Loader, Container } from "semantic-ui-react";

class App extends Component {
  apiURL = "https://fb-assessment.glitch.me/artists";
  //keeping state at the app level in order to pass around the artist id
  state = {
    artists: [],
    selectedArtist: {},
    loading: true,
    loadingFailed: false
  };

  //making api calls at the app level to keep responses with state
  selectArtist = async artistID => {
    var successful = false;
    let response = "";
    //avoiding infinite loops
    let counter = 10;
    do {
      try {
        response = await axios.get(this.apiURL + "/" + artistID);
        //error checking
        if (
          response.data !== undefined &&
          response.data !== {} &&
          !(
            Object.entries(response.data).length === 0 &&
            response.data.constructor === Object
          )
        ) {
          successful = true;
          await this.setState({ selectedArtist: response.data });
        }
      } catch (e) {
        console.log("Error: " + e);
      }
      counter--;
    } while (!successful && counter > 0);

    return response.data;
  };

  async getListOfArtists() {
    var successful = false;
    let response = "";
    let counter = 10;
    do {
      try {
        response = await axios.get(this.apiURL);
        if (
          Object.prototype.toString.call(response.data) === "[object Array]"
        ) {
          //error checking
          if (response.data !== undefined && response.data.length !== 0) {
            successful = true;
          }
        }
      } catch (e) {
        console.log("Error: " + e);
      }
      counter--;
    } while (!successful && counter > 0);
    return response.data;
  }

  async componentDidMount() {
    document.title = "Robert Stovall FB Challenge";
    let artistList = await this.getListOfArtists();
    if (artistList !== undefined) {
      let selectedArtist = await this.selectArtist(artistList[0].artistID);
      await this.setState({
        artists: artistList,
        selectedArtist: selectedArtist,
        loading: false
      });
    } else {
      this.setState({ loadingFailed: true, loading: false });
    }
  }

  render() {
    return (
      <div className="App">
        <Loader style={{ display: this.state.loading ? "block" : "none" }} />
        <Container
          textAlign="center"
          style={{ display: this.state.loadingFailed ? "block" : "none" }}
        >
          <p>API needs to wake up. </p>
          <p>
            Please go to{" "}
            <a
              href="https://fb-assessment.glitch.me/artists"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://fb-assessment.glitch.me/artists
            </a>{" "}
            to reactivate it.
          </p>
        </Container>
        <div className="grid-container">
          <div className="artists">
            <ArtistList
              artists={this.state.artists}
              selectArtist={this.selectArtist}
              selectedArtist={this.state.selectedArtist}
            />
          </div>
          <ArtistDetails
            selectedArtist={this.state.selectedArtist}
            loading={this.state.loading}
            loadingFailed={this.state.loadingFailed}
          />
        </div>
      </div>
    );
  }
}

export default App;
