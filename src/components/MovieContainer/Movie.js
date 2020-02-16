import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchMovie } from '../../reducers/searchReducer'
import { Link } from 'react-router-dom'

function Movie(props) {

    useEffect(() => {
        props.fetchMovie(props.match.params.id)
    }, [])
    return (
        <div className="container"  >
            <div className='row '>
                <div className='col-4 card card-body'>
                    <img src={props.movie.Poster} alt="poster" />
                </div>
                <div className='col-8'>
                    <ul className='list-group align-items-start'>
                        <li className='list-group-item'>
                            <strong>Title: </strong>{props.movie.Title}
                        </li>
                        <li className='list-group-item'>
                            <strong>Genre: </strong>{props.movie.Genre}
                        </li>
                        <li className='list-group-item'>
                            <strong>Title: </strong>{props.movie.Title}
                        </li>
                        <li className='list-group-item'>
                            <strong>Year: </strong>{props.movie.Year}
                        </li>
                        <li className='list-group-item'>
                            <strong>Type: </strong>{props.movie.Type}
                        </li>
                        <li className='list-group-item'>
                            <strong>Director: </strong>{props.movie.Director}
                        </li>
                        <li className='list-group-item'>
                            <strong>Actors: </strong>{props.movie.Actors}
                        </li>
                        <li className='list-group-item'>
                            <strong>imdbRating: </strong>{props.movie.imdbRating}
                        </li>
                    </ul>
                </div>
                <div className='card card-body container bg-dark text-light'>
                    <div className='col-12'>
                        <h3> About</h3>
                        {props.movie.Plot}
                        <hr />
                        <a className='btn btn-primary' target='_blank' href={`https://www.imdb.com/title/${props.match.params.id}`}>Read more at IMDB</a>
                        <Link to='/' > get back to search</Link>
                    </div>

                </div>
            </div>
        </div >
    )
}
let mapStateToprops = (state) => {
    return {
        movie: state.movies.movie
    }
}

export default connect(mapStateToprops, { fetchMovie })(Movie)