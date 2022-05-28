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
                    <NavLink to='/' exact>
                        Home
                    </NavLink>
                    <NavLink to='/users'>User</NavLink>
                    <NavLink to='/projects'>Project</NavLink>
                    <NavLink to='/about'>About</NavLink>
                </div>
            )}
        </>
    )
}

export default Nav
