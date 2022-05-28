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
                    {account &&
                        !_.isEmpty(account) &&
                        account.isAuthenticated && <Nav />}
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
                        <Route path='/users' exact>
                            <Users />
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
