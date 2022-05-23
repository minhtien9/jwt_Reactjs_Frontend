import React from 'react'
import PropTypes from 'prop-types'
import './Nav.scss'

const Nav = (props) => {
    return (
        <div className='topnav'>
            <NavLink clNavLinkssName='active' href='#home'>
                Home
            </NavLink>
            <NavLink href='/news'>News</NavLink>
            <NavLink href='/contact'>Contact</NavLink>
            <NavLink href='/about'>About</NavLink>
        </div>
    )
}

Nav.propTypes = {}

export default Nav
