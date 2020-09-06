import React, { Component } from 'react';
import Heart from "./heart";

class TableBody extends Component {
    
    render() { 
        const {onHeart,onDelete,movies} = this.props;
        return ( <tbody>
            {movies.map((movie) => (
              <tr key={movie._id}>
                <td className="col-md-3 themed-grid-col">{movie.title}</td>
                <td className="col-md-2 themed-grid-col">{movie.genre.name}</td>
                <td className="col-md-2 themed-grid-col">
                  {movie.numberInStock}
                </td>
                <td className="col-md-2 themed-grid-col">
                  {movie.dailyRentalRate}
                </td>
                <td className="col-md-1">
                  <Heart
                    movie={movie}
                    liked={movie.liked}
                    onSelected={() => onHeart(movie)}
                  />
                </td>
                <td className="col-md-2 themed-grid-col">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => onDelete(movie)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody> );
    }
}
 
export default TableBody;