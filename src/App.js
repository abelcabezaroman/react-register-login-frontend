import React, { useState } from 'react';
import './App.css';
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { BrowserRouter as Router, Link, Redirect, Route, Switch } from "react-router-dom";
import PrivateRoute from "./shared/components/PrivateRoute/PrivateRoute";
import AuthButton from "./shared/components/AuthButton/AuthButton";
import UsersPage from "./pages/UsersPage/HelloUser";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App () {
    // const isLogged = localStorage.getItem('token') ? true : false;
    const [isLogged, setIsLogged] = useState(!!localStorage.getItem('token'));
    return (
        <div className="App">
            <div className="App-header">
                <Router>
                    <AuthButton isLogged={isLogged} fnSetIsLogged={setIsLogged}/>

                    <nav>
                        {isLogged && <Link className="b-btn" to="/hello-user">Profile</Link>}
                        {isLogged && <Link className="b-btn" to="/users">Users</Link>}
                        <Link className="b-btn" to="/register">Register</Link>
                        <Link className="b-btn" to="/login">Login</Link>
                    </nav>


                    <Switch>
                        <Route path="/register">
                            <RegisterPage/>
                        </Route>
                        <PrivateRoute path="/profile">
                            <ProfilePage/>
                        </PrivateRoute>
                        <PrivateRoute path="/users">
                            <UsersPage/>
                        </PrivateRoute>
                        <Route path="/login">
                            <LoginPage fnSetIsLogged={setIsLogged}/>
                        </Route>
                        <Redirect from="/" to="login"/>
                    </Switch>
                </Router>
            </div>
        </div>
    );
}

export default App;
