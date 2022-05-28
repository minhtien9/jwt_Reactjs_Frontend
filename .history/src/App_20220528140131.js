import './App.scss'
import Nav from './components/Navigation/Nav'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect, useState } from 'react'
import Users from './components/ManageUsers/User'
import _ from 'lodash'

function App() {
    const [account, setAccount] = useState()

    useEffect(() => {
        let session = sessionStorage.getItem('account')
        if (session) {
            setAccount(JSON.parse(session))
        }
    }, [])
    return (
        <>
            <Router>
                <div className='app-container'>
                    {/* <Nav /> */}
                    <Switch>
                        <Route path='/news'>new</Route>
                        <Route path='/about'>about</Route>
                        <Route path='/contact'>contact</Route>
                        <Route path='/login' exact>
                            <Login />
                        </Route>
                        <Route path='/register' exact>
                            <Register />
                        </Route>
                        <Route path='/' exact>
                            home
                        </Route>
                        <Route path='*'>404 Not Found</Route>
                    </Switch>
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
