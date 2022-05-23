import { NavLink } from 'react-router-dom'
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

export default Nav
