import { Route, Routes } from "react-router-dom"
import Header from "./compoents/header"
import Hero from "./compoents/hero"
import Home from "./pages/home"
import Agents from "./pages/agent"
import Error404 from "./pages/error404"
import Footer from "./compoents/footer"


function App() {

  return ( 
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/agents" element={<Agents />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
