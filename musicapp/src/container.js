import React from "react";
import SongForm from "./Songform";
import { Button } from "reactstrap";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { song: [] };
    this.addSong = this.addSong.bind(this);
  }

  addSong(newSong) {
    let song = this.state.song;
    song.push(newSong);
    this.setState({ song: song });
  }
  render() {
    const clearList = () => {
      console.log("Clear list");
      this.setState({ song: [] });
    };

    let song = this.state.song;
    return (
      <div className="container">
        <div className="header">
          {" "}
          <h1> React from</h1>
        </div>
        <SongForm addSong={this.addSong} song={this.state.song}>
          {" "}
        </SongForm>
        <hr></hr>
        <div className="Nav">
          <div> Title: </div>
          <div> Artist: </div>
          <div> Rated: </div>
          <div> Genre: </div>
        </div>
        <ul>
          {song.map((event, index) => {
            return (
              <li className="ListItems" key={index}>
                <div> Title: {event.favSong} </div>{" "}
                <div> Artist: {event.Artist} </div>{" "}
                <div> Rated: {event.Rating} </div>{" "}
                <div> Genre : {event.Genre} </div>
              </li>
            );
          })}
        </ul>
        <Button color="danger" onClick={clearList}>
          {" "}
          Delete Numbers{" "}
        </Button>
      </div>
    );
  }
}

export default Container;
