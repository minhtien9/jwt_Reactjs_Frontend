import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './User.scss'

const Users = () => {
    let history = useHistory()
    useEffect(() => {
        let session = sessionStorage.getItem('account')
        if (!session) {
            history.push('/login')
        }
    }, [])
    return <div>User component</div>
}

export default Users
