import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Nav.scss'

const Nav = (props) => {
    const [isShow, setIsShow] = useState(true)

    return (
        <div className='topnav'>
            <NavLink activeClassName='active' to='/home'>
                Home
            </NavLink>
            <NavLink to='/news'>News</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/about'>About</NavLink>
        </div>
    )
}

export default Nav
