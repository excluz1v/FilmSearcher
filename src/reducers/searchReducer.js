import axios from 'axios'
import { APIKey } from '../APikeys'

let initialState = {
    text: '',
    movies: [],
    loading: false,
    movie: []
}

export let searchReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'Search_Movie': {
            return {
                ...state,
                text: action.payload,
                loading: false
            }
        }
        case 'fetchdata': {
            return {
                ...state,
                movies: action.payload,
            }
        }
        case 'fetchMovie': {
            return {
                ...state,
                movie: action.payload,
            }

        }
        default: return state
    }
}

export let Search_Movie = (payload) => {
    return { type: 'Search_Movie', payload }
}

export let fetchdata = (text) => dispatch => {
    axios.get(`https://www.omdbapi.com/?apikey=${APIKey}&s=${text}`).then(response => dispatch({
        type: 'fetchdata',
        payload: response.data.Search
    })).catch(error => {
        console.log(error)
    })
}
export let fetchMovie = (id) => dispatch => {

    axios.get(`https://www.omdbapi.com/?apikey=${APIKey}&i=${id}`).then(response => dispatch({
        type: 'fetchMovie',
        payload: response.data
    })).catch(error => {
        console.log(error)
    })
}
// axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&i=tt0816692`).then(response => console.log(response))