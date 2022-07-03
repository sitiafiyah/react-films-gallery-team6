import React, { Component } from "react";
import movies from "../mockData.js";
import SearchComponent from "./search-component";
import SortComponent from "./sort-component";
import ModalVideo from 'react-modal-video'
import 'bootstrap/dist/css/bootstrap.css';

export default class FilmsComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoaded: false,
			isOpen: false,
			items: movies.movies,
			unfilteredItems: movies.movies,
			unSortedItems: movies.movies,
		};
		this.search = this.search.bind(this);
		this.sortAscending = this.sortAscending.bind(this);
		this.sortDescending = this.sortDescending.bind(this);
		this.allFilter = this.allFilter.bind(this);
		this.hororFilter = this.hororFilter.bind(this);
		this.actionFilter = this.actionFilter.bind(this);
		this.comedyFilter = this.comedyFilter.bind(this);
		this.onOpenModal = this.onOpenModal.bind(this)
	}

	search(searchInput) {
		const filteredFilms = this.state.items.filter((item) => item.title.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1);

		if (searchInput.length) {
			this.setState({ items: filteredFilms })
		} else {
			this.setState({ items: this.state.unfilteredItems })
		}

	}

	sortAscending() {
		function compare(firstItem, secondItem) {
			if (firstItem.title < secondItem.title) {
				return 1;
			}
			if (firstItem.title > secondItem.title) {
				return -1;
			}
			return 0;
		}
		this.setState({ items: this.state.items.sort(compare) })
	}

	sortDescending() {
		function compare(firstItem, secondItem) {
			if (firstItem.title > secondItem.title) {
				return 1;
			}
			if (firstItem.title < secondItem.title) {
				return -1;
			}
			return 0;
		}
		this.setState({ items: this.state.items.sort(compare) })
	}

	allFilter() {
		this.setState({ items: movies.movies })
	}

	hororFilter() {
		const hororFilms = this.state.items.filter((item) => item.genre === 'horor');
		if (hororFilms.length) this.setState({ items: hororFilms })
	}

	actionFilter() {
		const actionFilms = this.state.items.filter((item) => item.genre === 'action');
		if (actionFilms.length) this.setState({ items: actionFilms })
	}

	comedyFilter() {
		const comedyFilms = this.state.items.filter((item) => item.genre === 'comedy');
		if (comedyFilms.length) this.setState({ items: comedyFilms })
		console.log(comedyFilms, "comedy")
	}

	onOpenModal = () => {
		this.setState({isOpen: true})
	};

	render() {
		return (
			<div className="container">
				<SearchComponent search={this.search} />

				<div className="line" />
				<div className="catagory" >
					<button onClick={this.allFilter} className='CatagoryButtons'> All </button>
					<button onClick={this.hororFilter} className='CatagoryButtons'> Horor </button>
					<button onClick={this.actionFilter} className='CatagoryButtons'> Action </button>
					<button onClick={this.comedyFilter} className='CatagoryButtons'> Comedy </button>
				</div>
				<div className="line" />

				<div className="row">
					<SortComponent sortAscending={this.sortAscending} sortDescending={this.sortDescending} />
				</div>


				<div className="row">
					{this.state.items.length ? this.state.items.map(item => (
						<div className="col-sm-4" key={item.id}>
							<div className="card movie-card" style={{ width: 300, margin: 10, border: '2px solid lightblue', borderRadius: 10 }}>
								<div style={{ display: 'flex' }}>
									<img className="card-img-top rounded mx-auto d-block" src={item.posterUrl} alt={item.title} style={{ height: "40vh", width: "100vw" }} />
								</div>
								<div className="card-title film-title">
									<h5 style={{ color: 'white' }}>{item.title}</h5>
									<h6> Release Date: {item.release_date}</h6>
								</div>
								<div className="card-body">
									{/* <Link to="/youtube"> */}
									<button onClick={this.onOpenModal} className='trailor-btn'>Watch Trailer</button>
									{/* </Link>ss */}
								</div>
							</div>
						</div>
					)) :
						<div className="col-sm-12" style={{ color: 'white', textAlign: 'center', minHeight: '500px' }}>
							<h1> No Film </h1>
						</div>
					}

					<ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})} />
				</div>
			</div>
		);
	}
}
