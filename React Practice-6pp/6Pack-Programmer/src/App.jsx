import Header from "./Components/Header"
import "./styles/App.css"
import "./styles/Header.css"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
function App(){
  return <Router>


    <Header/>

    <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element = {<div><h1>Page Not Found 404</h1></div>}/>
    </Routes>

  </Router>
}


export default App;