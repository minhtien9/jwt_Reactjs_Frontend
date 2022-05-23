import './App.scss'
import Nav from './components/Navigation/Nav'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function App() {
    return (
    <Router>
        <div className='app-container'>
             
            <Nav />
            <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      
        </div> 
        </Router>
    )
}

export default App
