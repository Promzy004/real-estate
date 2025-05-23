import { Route, Routes } from "react-router-dom"
import Header from "./compoents/header"
import Home from "./pages/home"
import Agents from "./pages/agent"
import Error404 from "./pages/error404"
import Footer from "./compoents/footer"
import Properties from "./pages/properties"
import PropertyDetails from "./pages/propertyDetails"
import AgentDetails from "./pages/agentDetails"
import Register from "./pages/register"
import Login from "./pages/login"
import Contact from "./pages/contact"
import About from "./pages/about"
import FAQs from "./pages/faq"


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
        <Route path="/agent-details/:id" element={<Error404 />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
