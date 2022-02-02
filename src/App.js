import logo from "./logo.svg";
import "./App.css";
import LoadingBar from "react-top-loading-bar";
import Navbar from "./components/Navbar";
import React, { Component } from "react";

export default class App extends Component {
  state = { progress: 0 };

  setProgress = (value) => {
    this.setState({ progress: value });
  };

  render() {
    return (
      <div>
        <Navbar />
        <LoadingBar height={3} color="#f11946" progress={this.state.progress} />
      </div>
    );
  }
}
