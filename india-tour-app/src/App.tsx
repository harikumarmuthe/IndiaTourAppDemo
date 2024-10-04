import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Product";
import NavBar from "./components/NavBar";
import Create from "./components/Create";


function App() {

  return <div>

    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/crt' element={<Create/>}></Route>
        <Route path='/prd' element={<Products />}></Route>
        <Route></Route>
      </Routes>
    </BrowserRouter>

  </div>
}
export default App;