import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Nav.scss'

const Nav = (props) => {
    const [isShow, setIsShow] = useState(true)
    let location = useLocation()

    useEffect(() => {
        if (location.pathname === '/login') {
            setIsShow(false)
        }
    }, [])
    return (
        <>
            {isShow === true && (
                <div className='topnav'>
                    <NavLink to='/home'>Home</NavLink>
                    <NavLink to='/news'>News</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                    <NavLink to='/about'>About</NavLink>
                </div>
            )}
        </>
    )
}

export default Nav
