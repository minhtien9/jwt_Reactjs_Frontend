import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from '../components/Login/Login'
import Users from '../components/ManageUsers/Users'
import Register from '../components/Register/Register'
import PrivateRoutes from '../routes/PrivateRoutes'
const AppRoutes = (props) => {
    return (
        <>
            <Switch>
                <PrivateRoutes path='/users' component={Users} />
                <Route path='/news'>new</Route>
                <Route path='/about'>about</Route>

                <Route path='/contact'>contact</Route>
                <Route path='/login'>
                    <Login />
                </Route>

                <Route path='/register'>
                    <Register />
                </Route>

                <Route path='/users'>
                    <Users />
                </Route>
                <Route path='/' exact>
                    home
                </Route>
                <Route path='*'>404 Not Found</Route>
            </Switch>
        </>
    )
}

export default AppRoutes
