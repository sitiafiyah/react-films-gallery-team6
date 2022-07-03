import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './sort-component.css'


export default class SortComponent extends Component {
  render() {
    const {sortAscending, sortDescending} = this.props;
    return (
      <div className="form-inline col-md-12" style={{display: 'flex', paddingTop: '20px', marginBottom: '20px'}}>
        <p style={{ fontSize: '20px', margin: 0, color: 'white', display: 'inline-block'}}> Sort Film :</p>
          <button onClick={sortDescending} className="sort-button">A - Z</button>
          <button onClick={sortAscending} className="sort-button">Z - A</button>
      </div>
    );
  }
}