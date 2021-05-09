import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown, faThumbsUp, faHeart} from '@fortawesome/free-regular-svg-icons'
import 'bootstrap/dist/css/bootstrap.css';
import './likes-component.css'

export default class LikesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      likes: props.children,
    };
  }

  increaseLikes = () => {
    this.setState({likes: this.state.likes + 1});
  }

  decreaseLikes = () => {
    this.setState({likes: this.state.likes - 1});
  }

  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <button onClick={this.increaseLikes} className="likes-button likes-button--like"><FontAwesomeIcon icon={faThumbsUp} /></button>
        <button onClick={this.decreaseLikes} className="likes-button likes-button--dislike"><FontAwesomeIcon icon={faThumbsDown} /></button>
        <p className="likes"> <FontAwesomeIcon icon={faHeart} /> {this.state.likes}</p>    
      </div>
    );
  }
}