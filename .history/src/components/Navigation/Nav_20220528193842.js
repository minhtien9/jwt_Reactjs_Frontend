import { NavLink } from 'react-router-dom'
import './Nav.scss'

const Nav = (props) => {
    return (
        <div className='topnav'>
            <NavLink clNavLinkssName='active' to='/home'>
                Home
            </NavLink>
            <NavLink to='/news'>News</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/about'>About</NavLink>
        </div>
    )
}

export default Nav
