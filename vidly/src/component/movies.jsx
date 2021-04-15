import React, {Component} from 'react';
import {getMovies} from "../services/fakeMovieService";
import Like from "../component/common/like";

export default class Movies extends Component {
    state = { 
        count: 0,
        movies: getMovies(),
        movieID: []
     };

     handleDelete = (movie) => {
         const movies = this.state.movies.filter(m => m._id !== movie._id);
         this.setState({movies:movies});
         
     };

     handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index].liked = !movies[index].liked;
        this.setState({movies});
     }

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
                
                {this.state.movies.map(movie => {
                    return (
                        <tr key={movie._id}>
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
                                <Like liked={movie.liked} onClick={()=>this.handleLike(movie)} />
                            </td>
                            <td>
                                <button className="btn btn-danger btn-sm" onClick={() => this.handleDelete(movie)}>Delete</button>

                            </td>
                        </tr>
                    );
                })}
            </tbody>      
            </table>    
            </div>

        )
    }
}
