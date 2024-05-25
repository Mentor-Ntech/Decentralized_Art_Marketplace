// import StarsCanvas from "./components/Canvas/Stars"
import ArtInfo from "./components/ArtInfo/ArtInfo"
import Home from "./pages/Home/Home"
import { Routes, Route, BrowserRouter } from "react-router-dom" 


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route>
        <Route path="/" element={<Home/>}/>
        <Route path="/artinfo" element={<ArtInfo/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
