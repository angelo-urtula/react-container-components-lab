import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'your-key-here';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: "",
        searchTerm: ""
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch("https://api.nytimes.com/svc/movies/v2/reviews/search.json?",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state.searchTerm)
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
        console.log(this.state.searchTerm)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" id="searchTerm" value={this.state.searchTerm} onChange={this.handleChange}/>

            </form>
        )
    }
}

export default SearchableMovieReviewsContainer
