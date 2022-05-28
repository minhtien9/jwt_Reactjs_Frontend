import './App.scss'
import Nav from './components/Navigation/Nav'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Login from './components/Login/Login'
import Register from './components/Register/Register'

function App() {
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
                position='top-right'
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
