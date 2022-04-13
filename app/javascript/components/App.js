import React, { Component } from 'react'
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import Header from './components/Header'
import AptIndex from './pages/AptIndex'
import { Nav, NavItem } from 'reactstrap'

class App extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    console.log("logged_in:", logged_in)
    console.log("current_user:", current_user)
    console.log("new_user_route:", new_user_route)
    console.log("sign_in_route:", sign_in_route)
    console.log("sign_out_route:", sign_out_route)
    return(
      <Router>
        <Header />
        <Nav>
          {logged_in &&
            <NavItem>
              <a href={sign_out_route} className="nav-link">Sign Out</a>
            </NavItem>
          }
          {!logged_in &&
            <NavItem>
              <a href={sign_in_route} className="nav-link">Sign In</a>
            </NavItem>
          }
          {!logged_in &&
            <NavItem>
              <a href={new_user_route} className="nav-link">Sign Up</a>
            </NavItem>
          }
        </Nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/AptIndex" component={AptIndex}/>
        </Switch>
      </Router>
    )
  }
}

export default App
