import React from "react"
import NavBar from "./NavBar"
import { Switch, Route, Redirect } from "react-router-dom"
import Main from "./layouts/Main"
import Users from "./layouts/Users"
import Login from "./layouts/Login"

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/users/:userId?" exact component={Users} />
        <Route path="/login" exact component={Login} />
        <Redirect to="/" />
      </Switch>
    </>
  )
}

export default App
