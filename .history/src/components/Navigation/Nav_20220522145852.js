import React from 'react'
import PropTypes from 'prop-types'
import './Nav.scss'

const Nav = (props) => {
    return (
        <div className='topnav'>
            <a className='active' href='#home'>
                Home
            </a>
            <a href='/news'>News</a>
            <a href='/contact'>Contact</a>
            <a href='/about'>About</a>
        </div>
    )
}

Nav.propTypes = {}

export default Nav
