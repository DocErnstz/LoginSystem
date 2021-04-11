import React from "react";
import {Link} from "react-router-dom";
import AuthOptions from "../auth/AuthOptions";
export default function Header() {
    return (
        <div id="header">
            <Link className="title" to="/"><h1>MERN auth todo app</h1></Link>
            <AuthOptions/>

        </div>
    );
}