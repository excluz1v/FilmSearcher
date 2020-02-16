
import React from 'react'

export default function Search(props) {

    let onChange = (e) => {
        return props.Search_Movie(e.target.value)
    }
    onsubmit = (e) => {
        e.preventDefault();
        props.fetchdata(props.searchState.text)
    }
    return (
        <div className='jumbotron jumbotron-fluid mt-5 text-center'>
            <div className='container'>
                <h1 className='display-4 mb-3'>
                    <i className='fa fa-search' />
                    Search for a Movie, TV series..
                </h1>
                <form >
                    <input className='form-control'
                        onChange={onChange}
                        value={props.searchState.text}
                        type='text'
                        name='seatchText'
                        placeholder='Search for a Movie, TV series..'></input>
                    <button className='btn btn-primary mt-3' >Search</button>

                </form>
            </div>
        </div>
    )
}
