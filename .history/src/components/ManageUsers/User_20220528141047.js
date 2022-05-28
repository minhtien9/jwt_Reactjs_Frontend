import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import React, { useEffect } from 'react'

const User = () => {
    let history = useHistory()
    useEffect(() => {
        let session = sessionStorage.getItem('account')
        if (!session) {
            setAccount(JSON.parse(session))
        }
    }, [])
    return <div>User component</div>
}

export default User
