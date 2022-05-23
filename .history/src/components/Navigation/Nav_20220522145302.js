import React from 'react'
import PropTypes from 'prop-types'

const Nav = (props) => {
    return (
        <div class='topnav'>
            <a class='active' href='#home'>
                Home
            </a>
            <a href='#news'>News</a>
            <a href='#contact'>Contact</a>
            <a href='#about'>About</a>
        </div>
    )
}

Nav.propTypes = {}

export default Nav
