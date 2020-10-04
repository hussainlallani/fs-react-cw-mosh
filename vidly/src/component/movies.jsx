import React, {Component} from 'react';
import {getMovies} from "../services/fakeMovieService";

export default class Movies extends Component {
    state = { 
        count: 0,
        movies: getMovies(),
        movieID: []
     };

     handleDelete = (movie) => {
         console.log(movie);
         const movies = this.state.movies.filter(m => m._id !== movie._id);
         this.setState({movies:movies});

     };

    render() {
        const {length : count} = this.state.movies;

        if (count===0) return <p>There are no movies in the database!</p>;
        return (
            <div><p>Showing {count} movies in the database.</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                
                {this.state.movies.map(movie => (
               <tr id={movie._id}>
                <td>
                    {movie.title}
                </td>
                <td>
                    {movie.genre.name}
                </td>
                <td>
                    {movie.numberInStock}
                </td>
                <td>
                    {movie.dailyRentalRate}
                </td>
                <td>
                    <button className="btn btm-danger btn-sm" onClick={() => this.handleDelete(movie)}>Delete</button>
                    
                </td>
                </tr>
                ))}
            </tbody>      
            </table>    
            </div>

        )
    }
}