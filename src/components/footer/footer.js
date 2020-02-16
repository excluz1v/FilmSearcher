import React from 'react'

export default function Footer() {
    return (
        <div className='row'>
            <div className='col-12'>
                <div className='footer p-3 mt-4 text-center bg-dark text-light'>
                    Developer by :
                    <span className='text-warning  font-weight-normal'>Dmitriy</span>
                    , using <i className="fab fa-react"></i> ReactJs &amp;Redux JS integrated with external movies data API
                    <a href='http://www.omdbapi.com/' target="_blank">  omdbapi</a>
                </div>

            </div>


        </div>
    )
}
