import React from "react"
import { NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <ul>
    <li id="rutas"><NavLink id="etiquetaM" to='/'>Perfil</NavLink></li>
    <li id="rutas"><NavLink id="etiquetaM" to='/Experiencia'>Experiencia</NavLink></li>
    <li id="rutas"><NavLink id="etiquetaM" to='/ConocimientosIn'>Referencias</NavLink></li>
    <li id="rutas"><NavLink id="etiquetaM" to='/Proyectos'>Proyectos</NavLink></li>
    <li id="rutas"><NavLink id="etiquetaM" to='/HeaderShop'>Marke-Place</NavLink></li>
    </ul>
  )
}
