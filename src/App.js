import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'

const App = function () {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path={`${process.env.PUBLIC_URL}/`} exact component={Home} />
      </Switch>
    </Router>
  )
}

export default App
