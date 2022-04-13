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


class App extends Component {
  render() {
    return(
      <Router>
        <Header {...this.props}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/AptIndex" component={AptIndex}/>
        </Switch>
      </Router>
    )
  }
}

export default App
