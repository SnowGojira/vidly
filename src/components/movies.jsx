import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';

class Movies extends Component {
    state = { 
        movies:getMovies()
     }
    render() { 
        return <React.Fragment>
            <hr className="m-4"></hr>
            <div className="row mb-3" style={{fontWeight:'bold'}}>
                <div className="col-md-4 themed-grid-col">Title</div>
                <div className="col-md-2 themed-grid-col">Genre</div>
                <div className="col-md-2 themed-grid-col">Stock</div>
                <div className="col-md-2 themed-grid-col">Rate</div>
                <div className="col-md-2 themed-grid-col"></div>
            </div>
            <div className="row mb-3">
                <div className="col-md-4 themed-grid-col">Title</div>
                <div className="col-md-2 themed-grid-col">Genre</div>
                <div className="col-md-2 themed-grid-col">Stock</div>
                <div className="col-md-2 themed-grid-col">Rate</div>
                <div className="col-md-2 themed-grid-col">
                    <button>delete</button>
                </div>
            </div>
        </React.Fragment>;
    }
}
 
export default Movies;