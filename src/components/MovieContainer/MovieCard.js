import React from 'react'
import { Link } from 'react-router-dom'


export default function MovieCard(props) {
    // console.log(props)
    return (
        <div className="col-3 mb-5"  >
            <div className=' card card-body bg-dark text-center h-100'>
                <img src={props.movies.Poster} className="w-100 mb-2" alt="..." />
                <h5 className="card-title text-light">{props.movies.Title}</h5>
                <p className="card-text text-light"> {props.movies.Year}</p>
                <Link className='btn btn-primary' to={`/movie/${props.movies.imdbID}`}>
                    <i className='fas fa-chevron-right' />
                </Link>
            </div>
        </div>
    )
}
