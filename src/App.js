import React, { Component } from "react";
import "./App.css";
import ArtistList from "./components/ArtistList.js";
import axios from "axios";

class App extends Component {
  state = {
    artists: []
  };

  componentDidMount() {
    axios.get("https://fb-assessment.glitch.me/artists").then(res => this.setState({ artists: res.data }));
  }

  render() {
    return (
      <div className="App">
        <ArtistList artists={this.state.artists} />
      </div>
    );
  }
}

export default App;
