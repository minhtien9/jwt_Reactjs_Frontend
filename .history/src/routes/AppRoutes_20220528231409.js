import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from '../components/Login/Login'
import Users from '../components/ManageUsers/Users'
import Register from '../components/Register/Register'
import PrivateRoutes from '../routes/PrivateRoutes'
const AppRoutes = (props) => {
    const Project = () => {
        return <span>Project</span>
    }
    return (
        <>
            <Switch>
                <PrivateRoutes path='/users' component={Users} />
                <PrivateRoutes path='/projects' component={Project} />

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
