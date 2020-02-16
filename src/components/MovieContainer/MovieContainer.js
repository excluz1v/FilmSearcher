import React from 'react'
import MovieCard from './MovieCard'

export default function MovieContainer(props) {
    return (
        <div className='row'>
            {props.searchState.movies ?
                props.searchState.movies.map((el, index) => {
                    return < MovieCard key={index} movies={el} />
                })

                : undefined}
        </div>
    )
}
