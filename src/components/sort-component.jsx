import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './sort-component.css'


export default class SortComponent extends Component {
  render() {
    const {sortByLikes, sortByStars} = this.props;
    return (
      <div style={{ margin: '15px 0'}}>
        <p style={{ fontSize: '20px', margin: 0, color: 'black', display: 'inline-block'}}>You can sort films: </p>
          <button onClick={sortByLikes} className="sort-button">by likes</button>
          <button onClick={sortByStars} className="sort-button">by stars</button>
      </div>
    );
  }
}