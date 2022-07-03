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
			<form className="form-inline col-md-12" style={{ display: 'flex', justifyContent:"right", paddingTop: '20px', marginBottom: '20px' }}>
				<input type="search" placeholder="Search Film by Title" onChange={this.getSearchValue} className="search-input" />
			</form>
		);
	}
}