import './App.scss'
import Nav from './components/Navigation/Nav'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
    return (
        <Router>
            <div className='app-container'>
                {/* <Nav /> */}
                <Switch>
                    <Route path='/news'>new</Route>
                    <Route path='/about'>about</Route>
                    <Route path='/contact'>contact</Route>
                    <Route path='/' exact>
                        home
                    </Route>
                    <Route path='/login' exact>
                        home
                    </Route>
                    <Route path='*'>404 Not Found</Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App
