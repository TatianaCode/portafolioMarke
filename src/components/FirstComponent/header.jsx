import React from "react";
import { NavLink } from "react-router-dom";

export const Header= () =>{
    return(
        <header>
            <nav>
                <NavLink to='/'></NavLink>
                <NavLink to='/hola'></NavLink>
            </nav>
        </header>
    )
}