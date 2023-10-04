import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Link,
  useNavigate,
} from "react-router-dom";
import Welcome from "../src/Components/Animations/Welcome";
import Home from "./Components/Home/Home"
import AboutMe from "./Components/AboutMe/AboutMe";
import Projects from "./Components/Projects/Projects";
import GetInTouch from "./Components/GetInTouch/GetInTouch";


function App() {
  return <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/Home" element={<Home/>} />
        <Route path="/AboutMe" element={<AboutMe/>} />
        <Route path="/Project" element={<Projects/>} />
        <Route path="/Contact" element={<GetInTouch/>} />
      </Routes>
    </Router>
  </div>;
}

export default App;
