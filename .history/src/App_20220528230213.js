import _ from 'lodash'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.scss'
import Login from './components/Login/Login'
import Users from './components/ManageUsers/Users'
import Nav from './components/Navigation/Nav'
import Register from './components/Register/Register'
import AppRoutes from './routes/AppRoutes'

function App() {
    const [account, setAccount] = useState({})

    useEffect(() => {
        let session = sessionStorage.getItem('account')
        if (session) {
            setAccount(JSON.parse(session))
        }
    }, [])
    return (
        <>
            <Router>
                <div className='app-header'>
                    <Nav />
                </div>
                <div className='app-container'>
                    {/* {account &&
                        !_.isEmpty(account) &&
                        account.isAuthenticated && <Nav />} */}

                    <AppRoutes />
                </div>
            </Router>
            <ToastContainer
                position='bottom-center'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    )
}

export default App
