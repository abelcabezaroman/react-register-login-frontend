import React, { useState } from 'react';
import './App.css';
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegisterPage } from "./pages/RegisterPage/LoginPage";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import HelloUser from "./pages/HelloUser/HelloUser";
import PrivateRoute from "./shared/components/PrivateRoute/PrivateRoute";
import AuthButton from "./shared/components/AuthButton/AuthButton";

function App () {
    const [isLogged, setIsLogged] = useState(!!localStorage.getItem('token'));
    return (
        <div className="App">
            <div className="App-header">
                <Router>
                    <AuthButton isLogged={isLogged} fnSetIsLogged={setIsLogged}/>

                    <nav>
                        <Link to="/hello-user">Private Route</Link>
                    </nav>


                    <Switch>
                        <Route path="/register">
                            <RegisterPage/>
                        </Route>
                        <PrivateRoute path="/hello-user">
                            <HelloUser/>
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
