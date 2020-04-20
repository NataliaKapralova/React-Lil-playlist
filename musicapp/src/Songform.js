import React from "react";
import styles from "./index.css";
import { Button } from "reactstrap";

class SongForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { song: { favSong: "", Artist: "", Rating: "", Genre: "" } };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let { name, value } = event.target;
    let song = this.state.song;
    song[name] = value;
    this.setState({ song });
  }
  error = false;

  handleSubmit(event) {
    event.preventDefault();
    if (!this.error) {
      this.props.addSong(this.state.song);
      this.setState({
        song: { favSong: "", Rating: "", Artist: "", Genre: "" },
      });
    }
  }

  render() {
    let song = this.state.song;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="col.md-4 mb-3">
              <label> Song title: </label>
              <input
                onChange={this.handleChange}
                name="favSong"
                className="form-control"
                value={song.favSong}
                placeholder="Add title "
              ></input>
            </div>
            <div className="col.md-4 mb-3">
              <label> Artist: </label>
              <input
                onChange={this.handleChange}
                name="Artist"
                className="form-control"
                value={song.Artist}
                placeholder="Add artist"
              ></input>
            </div>
            <div className="col.md-4 mb-3">
              <label> Rating: </label>
              <select
                className="form-control"
                name="Rating"
                defaultValue={song.Rating}
                onChange={this.handleChange}
              >
                <option> 1 </option>
                <option> 2 </option>
                <option> 3 </option>
                <option> 4 </option>
                <option> 5 </option>
              </select>
            </div>
            <div className="col.md-4 mb-3">
              <label> Genre: </label>
              <select
                className="form-control"
                name="Genre"
                defaultValue={song.Genre}
                onChange={this.handleChange}
              >
                <option> Jazz </option>
                <option> Hip-hop </option>
                <option> Pop </option>
                <option> Rock</option>
                <option> Klassiek </option>
              </select>
            </div>
            <div className="col.md-4 mb-3">
              <label>
                {" "}
                <a href="About"> About us </a>
              </label>
              <Button
                className="form-control"
                color="primary"
                // onClick={this.handleSubmit}
              >
                {" "}
                Add Music
              </Button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SongForm;
