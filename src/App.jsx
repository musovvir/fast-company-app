import React from "react"
import NavBar from "./components/ui/NavBar"
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
        <Route path="/users/:userId?/:edit?" exact component={Users} />
        <Route path="/login/:type?" exact component={Login} />
        <Redirect to="/" />
      </Switch>
    </>
  )
}

export default App
