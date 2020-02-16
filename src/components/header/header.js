import React from 'react'
import style from './header.module.css'

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">MovieSeriesInfo</a>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className={`navbar-nav ${style.ul}`}>
                    <li className="nav-item active display-4 ">
                        <i className="fab fa-imdb"></i>
                    </li>
                    {/* <li className="nav-item">
                    </li> */}
                </ul>
            </div>
        </nav>
    )
}
