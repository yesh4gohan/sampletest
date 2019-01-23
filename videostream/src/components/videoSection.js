import React, { Component } from "react";
import YouTube from "react-youtube";
import axios from "axios";

const API_KEY = "SECRET";
const opts = {
  height: "200",
  width: "200",
  playerVars: {
    autoplay: 1
  }
};
export default class VideoSection extends Component {
  componentDidMount(){
    axios
    .get(`https://www.googleapis.com/youtube/v3/playlists?part=snippet
    &channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw
    &key=${API_KEY}`)
    .then(res => console.log(res))
    .catch(err=>console.log(err))
  }
  onReady = e => {
    this.setState({loading:false});
    e.target.pauseVideo();
  };
  state = {
    loading:false,
    arr: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  };
  onPlay = e => {
    console.log(e);
    let time = localStorage.getItem("time");
    e.target.playVideoAt(time);
  }
  onPause = e => {
    localStorage.setItem("time",e.target.getCurrentTime());
    console.log(localStorage.getItem("time"));
  }
  renderVideos = () => {
    return this.state.arr.map((arr,key) => {
      return (
        <div className="col-4">
          <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={this.onReady} onPause = {this.onPause} onPlay = {this.onPlay}/>
          <h2>{`Video ${key+1}`}</h2>
        </div>
      );
    });
  };
  render() {
   //loader implement
    return (
      <div>
        <div className="row m-2">{this.renderVideos()}</div>
      </div>
    );
  }
}
