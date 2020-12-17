import React from "react";
import { Redirect, Route } from "react-router-dom";
import { getCookieUtil } from "../../utils/getCookieUtil";

export default function PrivateRoute ({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                getCookieUtil('token') ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}
