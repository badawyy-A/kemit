import MovieCard from './MovieCard'

function MovieContaien() {

    return ( 
        <div className="movie-container">
                <i className="fa fa-chevron-right scrole scrole-left"></i>
                <i className="fa fa-chevron-left scrole scrole-right"></i>
            <div className="container">
                <h3>Just release</h3>
                <MovieCard/>
            </div>
        </div>
     );
}

export default MovieContaien;