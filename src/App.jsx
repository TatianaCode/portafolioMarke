
import { Route, Routes } from "react-router-dom"
import { FirstComponent } from "./components/FirstComponent/FirstComponent"
import AppMarkePlace from "./components/AppMarke"
import { Notfound } from "./components/FirstComponent/NotFound"
import { Experiencia } from "./components/FirstComponent/experiencia"
import {Conocimientos} from "./components/FirstComponent/conocimientos"
import { Proyecto } from "./components/FirstComponent/proyectos"
function App() {

  return (
    <>
    <div className="App flex justify-center">
      <Routes>
        <Route path="/" element={<FirstComponent/>}/>
        <Route path="/Experiencia" element={<Experiencia/>} />
        <Route path="/ConocimientosIn"  element={<Conocimientos/>}/>
        <Route path="/Proyectos" element={<Proyecto/>}/>
        <Route path="/HeaderShop" element={<AppMarkePlace/>}/>
        <Route path="*" element={<Notfound/>} />
      </Routes>
    </div>

    </>
  )
}

export default App
