import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Main from "./Main";

// @ts-ignore
function PrivateRoute ({ component: Component, getRoomList, ...rest }) {
    return (
        <Route
            {...rest}
            render = {props =>
                sessionStorage.getItem('users')?(
                    <Component {...props} getRoomList={getRoomList} />
                ) : (
                    <Redirect to={{
                        pathname: '/login',
                        state: {from: props.location}
                    }}
                    />
                )
            }
        />
    )
}

export default PrivateRoute;