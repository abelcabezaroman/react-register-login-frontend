import React from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { IsLoggedContext } from "../../contexts/IsLoggedContext";


export default function AuthButton () {
    const {isLogged, setIsLogged} = useContext(IsLoggedContext);
    let history = useHistory();
    const user = JSON.parse(localStorage.getItem('user'));

    const signOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setIsLogged(false);
        history.push("/");
    }

    return isLogged ? (
        <p>
            Welcome! {user.name}
            <button
                onClick={signOut}
            >
                Sign out
            </button>
        </p>
    ) : (
        <p>You are not logged in.</p>
    );
}
