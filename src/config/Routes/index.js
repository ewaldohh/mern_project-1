import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Login, Register, MainApp} from '../../pages'

const Routes = () => {
  return (
    <Router>
        <Switch>
            <Route path="/Login">
                <Login />
            </Route>
            <Route path="/Register">
                <Register />
            </Route>
            <Route path= "/">
                <MainApp />
            </Route>
        </Switch>
    </Router>

  )
}

export default Routes