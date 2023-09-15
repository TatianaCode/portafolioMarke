import React from "react";
import { Navbar } from "./navbar";
import { ConocimientosIn } from "./conocimientosIn";

export const Conocimientos =()=>{
    return(
<>
<div id="todoCono">
<div id="conocimientoC">
<div id="navCss">
<Navbar></Navbar>
</div>
<div id="coni">
<ConocimientosIn></ConocimientosIn>
</div>
</div>
</div>
</>
    )
}