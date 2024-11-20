import React from "react";
import Home from "../sites/home";
// === END OF IMPORTS ===

function getToken() {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
}

export default function Console() {
    const token = getToken();

    if(!token) {
        return <Home/>
    }


    return (
        <>
            <h1>Hello World</h1>
        </>
    );
}