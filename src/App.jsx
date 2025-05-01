import { Route, Routes } from "react-router-dom"
import Header from "./compoents/header"
import Hero from "./compoents/hero"
import Home from "./pages/home"


function App() {

  return ( 
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </>
  )
}

export default App
