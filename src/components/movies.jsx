import React, { Component } from 'react';
import {getMovies,deleteMovie} from '../services/fakeMovieService';

class Movies extends Component {
    state = { 
        movies:getMovies()
     }
    
    movieSection(movie){
        // console.log(movie);
        return <div className="row mb-3" key={movie._id}>
                <div className="col-md-4 themed-grid-col">{movie.title}</div>
                <div className="col-md-2 themed-grid-col">{movie.genre.name}</div>
                <div className="col-md-2 themed-grid-col">{movie.numberInStock}</div>
                <div className="col-md-2 themed-grid-col">{movie.dailyRentalRate}</div>
                <div className="col-md-2 themed-grid-col">
                    <button onClick={()=>this.handleDelete(movie._id)}>delete</button>
                </div>
            </div>
    }
    handleDelete=(id)=>{
      deleteMovie(id);
      this.setState({movie:getMovies()})
    }
    getTitleSpan(){
        
    }
    render() { 
        return <React.Fragment>
            <div>showing {this.state.movies.length} movies</div>
            <hr className="m-4"></hr>
            <div className="row mb-3" style={{fontWeight:'bold'}}>
                <div className="col-md-4 themed-grid-col">Title</div>
                <div className="col-md-2 themed-grid-col">Genre</div>
                <div className="col-md-2 themed-grid-col">Stock</div>
                <div className="col-md-2 themed-grid-col">Rate</div>
                <div className="col-md-2 themed-grid-col"></div>
            </div>
            
               {this.state.movies.map(movie=>this.movieSection(movie))}
            
            
        </React.Fragment>;
    }
}
 
export default Movies;