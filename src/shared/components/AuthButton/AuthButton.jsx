import React from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { JwtContext } from "../../contexts/JwtContext";
import { getCookieUtil } from "../../utils/getCookieUtil";
import { removeCookieUtil } from "../../utils/removeCookieUtil";

export default function AuthButton () {
    const {jwt, setJwt} = useContext(JwtContext);
    let history = useHistory();
    const stringUser = getCookieUtil('user');
    const user = JSON.parse(stringUser ? stringUser : '{}');

    const signOut = () => {
        removeCookieUtil('user');
        removeCookieUtil('token');

        setJwt(null);
        history.push("/");
    }

    return jwt ? (
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
