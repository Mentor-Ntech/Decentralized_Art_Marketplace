// import StarsCanvas from "./components/Canvas/Stars"
import ArtInfo from "./components/ArtInfo/ArtInfo"
import OrderCreation from "./components/OrderCreation/OrderCreation"
import Home from "./pages/Home/Home"
import { Routes, Route, BrowserRouter } from "react-router-dom" 


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route>
        <Route path="/" element={<Home/>}/>
        <Route path="/artinfo" element={<ArtInfo/>}/>
        <Route path="/orderCreation" element={<OrderCreation/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
