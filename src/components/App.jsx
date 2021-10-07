import React from "react"
import NavBar from "./NavBar"
import { Switch, Route } from "react-router-dom"
import Main from "./layouts/Main"
import Users from "./layouts/Users"
import Login from "./layouts/Login"

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/users" exact component={Users} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </>
  )
}

export default App
