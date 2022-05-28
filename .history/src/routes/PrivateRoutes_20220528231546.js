import React from 'react'
import { Route, useHistory } from 'react-router-dom'

const PrivateRoutes = (props) => {
    let history = useHistory()

    return (
        <div>
            <Route path={props} component={props} />
        </div>
    )
}

export default PrivateRoutes
