import React from "react";
import NavBar from "./app/components/ui/navBar";
import { Switch, Route, Redirect } from "react-router-dom";
import Main from "./app/layouts/main";
import Users from "./app/layouts/users";
import Login from "./app/layouts/login";

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
    );
};

export default App;
