import React from 'react'
import {  withRouter, NavLink } from 'react-router-dom'

const NavBar = (props) => {
    return (
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
                <div className="brand-logo left">
                    {/* <NavLink to="/"> */}
                        Minesweeper
                {/* </NavLink> */}
                </div>
                <ul className="right">
                    <li><NavLink to="/mines">Home</NavLink></li>
                    <li><NavLink to="/mines/rules">Rules</NavLink></li>
                    <li><NavLink to="/mines/game">Game</NavLink></li>
                    <li><NavLink to="/mines/about">About</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
export default withRouter(NavBar);