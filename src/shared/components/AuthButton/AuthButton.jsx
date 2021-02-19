import React from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { IsLoggedContext } from "../../contexts/IsLoggedContext";
import { getCookieUtil } from "../../utils/getCookieUtil";
import { removeCookieUtil } from "../../utils/removeCookieUtil";

export default function AuthButton () {
    const {isLogged, setIsLogged} = useContext(IsLoggedContext);
    let history = useHistory();
    const stringUser = getCookieUtil('user');
    const user = JSON.parse(stringUser ? stringUser : '{}');

    const signOut = () => {
        removeCookieUtil('user');
        removeCookieUtil('token');

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
