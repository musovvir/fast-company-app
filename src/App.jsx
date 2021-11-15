import React from "react";
import NavBar from "./app/components/ui/navBar";
import { Switch, Route, Redirect } from "react-router-dom";
import Main from "./app/layouts/main";
import Users from "./app/layouts/users";
import Login from "./app/layouts/login";
import { ToastContainer } from "react-toastify";
import { ProfessionProvider } from "./app/hooks/useProfession";

const App = () => {
    return (
        <>
            <NavBar />
            <Switch>
                <ProfessionProvider>
                    <Route path="/" exact component={Main} />
                    <Route
                        path="/users/:userId?/:edit?"
                        exact
                        component={Users}
                    />
                    <Route path="/login/:type?" exact component={Login} />
                </ProfessionProvider>
                <Redirect to="/" />
            </Switch>
            <ToastContainer />
        </>
    );
};

export default App;
