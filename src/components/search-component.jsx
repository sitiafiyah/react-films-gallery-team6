import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.css';
import './search-component.css'



export default class SearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchFunction: props.search,
      searchValue: '' 
    };
  }

  getSearchValue = (e) => {
    this.state.searchFunction(e.target.value)
  }

  render() {
    return (
      <form className="form-inline col-md-12" style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
        <p style={{ fontSize: '20px', margin: 0, color: 'black'}}>You can search films by title</p>
        <input type="search" placeholder="Film title..." onChange={this.getSearchValue} className="search-input"/>
        <span><FontAwesomeIcon icon={faSearch} /></span>
      </form>
    );
  }
}