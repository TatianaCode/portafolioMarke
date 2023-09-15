import React from "react";
import { Navbar } from "./navbar"; 

export const Proyecto=()=>{
    return(
        <>
        <div className="contenProyect">
        <Navbar></Navbar>
        <br /><br /><br />
        <h1>Mis Proyectos</h1>
        <div className="contenImage">
            <img id="si" src="./img/Apptastico.png" alt="" />
            <img id="si" src="./img/blueasy.png" alt="" />
            <img id="si" src="./img/Plantilla_Bleux.png" alt="" />
        </div>
        </div>
        </>
    )
}