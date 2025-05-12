import { Route, Routes } from "react-router-dom"
import Header from "./compoents/header"
import Home from "./pages/home"
import Agents from "./pages/agent"
import Error404 from "./pages/error404"
import Footer from "./compoents/footer"
import Properties from "./pages/properties"
import PropertyDetails from "./pages/propertyDetails"
import AgentDetails from "./pages/agentDetails"


function App() {

  return ( 
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/agents" element={<Agents />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/property-details/:id" element={<PropertyDetails />} />
        <Route path="/agent-details/:id" element={<AgentDetails />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
