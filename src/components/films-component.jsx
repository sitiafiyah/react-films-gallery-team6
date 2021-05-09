import React, { Component } from "react";
import movies from "../mockData.js";
import LikesComponent from "./likes-component";
import StarsComponent from "./stars-component";
import SearchComponent from "./search-component";
import SortComponent from "./sort-component";

import 'bootstrap/dist/css/bootstrap.css';


export default class FilmsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: movies.movies,
      unfilteredItems: movies.movies,
    };
    this.search = this.search.bind(this);
    this.sortByLikes = this.sortByLikes.bind(this);
    this.sortByStars = this.sortByStars.bind(this);
  }

  search(searchInput) {
    const filteredFilms = this.state.items.filter((item) => item.title.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1);

    if (searchInput.length) {
      this.setState({ items: filteredFilms })
    } else {
      this.setState({ items: this.state.unfilteredItems })
    }

  }

  sortByLikes() {
    function compare(firstItem, secondItem) {
      if (firstItem.likes < secondItem.likes) {
        return 1;
      }
      if (firstItem.likes > secondItem.likes) {
        return -1;
      }
      return 0;
    }
    this.setState({ items: this.state.items.sort(compare) })
  }

  sortByStars() {
    function compare(firstItem, secondItem) {
      if (firstItem.stars < secondItem.stars) {
        return 1;
      }
      if (firstItem.stars > secondItem.stars) {
        return -1;
      }
      return 0;
    }
    this.setState({ items: this.state.items.sort(compare) })
   }

  render() {
    return (


      <div className="container">
        <SearchComponent search={this.search} />
        <SortComponent sortByLikes={this.sortByLikes} sortByStars={this.sortByStars}/>
        
        <div className="row">
          
          {this.state.items.map(item => (
            <div className="col-sm-4" key={item.id}>
              <div className="card" style={{ width: 300, margin: 10, border: '2px solid lightblue', borderRadius: 10 }}>
                <h5 className="card-title film-title">{item.title}</h5>
                <div style={{ display: 'flex' }}>
                  <LikesComponent>
                    {item.likes}
                  </LikesComponent>
                  <img className="card-img-top" src={item.posterUrl} alt={item.title} style={{ maxWidth: 220, height: 300 }} />
                </div>
                <div className="card-body">
                  <StarsComponent>
                    {item.stars}
                  </StarsComponent>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    );
  }
}
