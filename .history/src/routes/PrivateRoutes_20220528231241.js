import React from 'react'
import { Route, Switch } from 'react-router-dom'

const PrivateRoutes = (props) => {
    return (
        <div>
            <Route path={props} component={props}></Route>
        </div>
    )
}

export default PrivateRoutes
