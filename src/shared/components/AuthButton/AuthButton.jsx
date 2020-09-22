import React from "react";
import { useHistory } from "react-router-dom";


export default function AuthButton (props) {
    let history = useHistory();
    const user = JSON.parse(localStorage.getItem('user'));

    const signOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        props.fnSetIsLogged(false);
        history.push("/");
    }

    return props.isLogged ? (
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
