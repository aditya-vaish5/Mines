import React from 'react'
import { Link, withRouter, NavLink } from 'react-router-dom'

const NavBar = (props) => {
    return (
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
                <a className="brand-logo left">
                    <NavLink to="/">
                        Minesweeper
                </NavLink>
                </a>
                <ul className="right">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/rules">Rules</NavLink></li>
                    <li><NavLink to="/game">Game</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
export default withRouter(NavBar);