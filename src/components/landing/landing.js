import React from 'react'
import Search from '../search/search'
import { connect } from 'react-redux'
import { Search_Movie, fetchdata } from '../../reducers/searchReducer'
import Spinner from '../spinner/spinner'
import MovieContainer from '../MovieContainer/MovieContainer'


function Landing(props) {

    return (
        <div className='container'>
            <Search fetchdata={props.fetchdata} Search_Movie={props.Search_Movie} searchState={props.searchState} />
            {props.searchState.loading ? <Spinner />
                : <MovieContainer searchState={props.searchState} />}
        </div>
    )
}

let mapStatetoProps = state => {
    return {
        searchState: state.movies
    }
}

export default connect(mapStatetoProps, { Search_Movie, fetchdata })(Landing)

