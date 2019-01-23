import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SideBar from "./components/sideBar";
import VideoSection from "./components/videoSection";
import { BrowserRouter as Router, Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <SideBar />
          <Route exact path="/videoSection" component={VideoSection} />
        </div>
      </Router>
    );
  }
}

export default App;
