import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'your-key-here';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {
    constructor(){
        super()
        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        fetch("https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=8jZ7kGyZTSUh2X7xgil7pUjtfHxW0yTN")
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                reviews: data.results
            })
        })
    }
render() {
    return(
        <div className="latest-movie-reviews"><MovieReviews reviews={this.state.reviews}/></div>
    )
}

}

export default LatestMovieReviewsContainer