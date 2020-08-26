import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';

class Movies extends Component {
    state = { 
        movies:getMovies()
     }
    render() { 
        return ( 
            <div>{this.state.movies.toString()}</div>
         );
    }
}
 
export default Movies;