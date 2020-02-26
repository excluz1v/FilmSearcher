import React from 'react'
import { Link } from 'react-router-dom'


export default function MovieCard(props) {
    // console.log(props)
    return (
        <div className="col-lg-3 col-sm-6 mb-3"  >
            <div className='row card card-body bg-dark text-center'>
                <img src={props.movies.Poster} style={{ height: "100%", width: "100%" }} alt="..." />
                <h5 className="card-title text-light">{props.movies.Title}</h5>
                <p className="card-text text-light"> {props.movies.Year}</p>
                <Link className='btn btn-primary' to={`/movie/${props.movies.imdbID}`}>
                    <i className='fas fa-chevron-right' />
                </Link>
            </div>
        </div>
    )
}
