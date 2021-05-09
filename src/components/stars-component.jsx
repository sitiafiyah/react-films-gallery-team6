import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.css';


export default class StarsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      starsAmount: props.children,
    };
    this.setStars = this.setStars.bind(this);
  }

  setStars(event) {
    this.setState({ starsAmount: event.currentTarget.dataset.stars });
  }

  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          {Array.apply(null, Array(5)).map((item, i) =>
            i < this.state.starsAmount
              ? (<span onClick={this.setStars} data-stars={i+1} key={i} style={{color: 'gold'}}><FontAwesomeIcon icon={faStarSolid} /></span>)
              : (<span onClick={this.setStars} data-stars={i+1} key={i}><FontAwesomeIcon icon={faStar} /></span>)
          )}
        </div>
      </div>
    );
  }
}