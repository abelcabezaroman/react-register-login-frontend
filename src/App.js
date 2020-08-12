import React, { useState } from 'react';
import './App.css';
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { BrowserRouter as Router, Link, Redirect, Route, Switch } from "react-router-dom";
import PrivateRoute from "./shared/components/PrivateRoute/PrivateRoute";
import AuthButton from "./shared/components/AuthButton/AuthButton";
import UsersPage from "./pages/UsersPage/HelloUser";
import HelloUserPage from "./pages/HelloUserPage/HelloUserPage";

function App () {
    const [isLogged, setIsLogged] = useState(!!localStorage.getItem('token'));
    return (
        <div className="App">
            <div className="App-header">
                <Router>
                    <AuthButton isLogged={isLogged} fnSetIsLogged={setIsLogged}/>

                    <nav>
                        <Link to="/hello-user">Private Route</Link>
                        <Link to="/users">Users</Link>
                        <Link to="/register">Register</Link>
                        <Link to="/login">Login</Link>
                    </nav>


                    <Switch>
                        <Route path="/register">
                            <RegisterPage/>
                        </Route>
                        <PrivateRoute path="/hello-user">
                            <HelloUserPage/>
                        </PrivateRoute>
                        <PrivateRoute path="/users">
                            <UsersPage/>
                        </PrivateRoute>
                        <Route path="/login">
                            <LoginPage isLogged={isLogged} fnSetIsLogged={setIsLogged}/>
                        </Route>
                        <Redirect from="/" to="login"/>
                    </Switch>
                </Router>
            </div>
        </div>
    );
}

export default App;
