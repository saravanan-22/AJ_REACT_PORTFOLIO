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


function App() {
  return <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/Home" element={<Home/>} />
      </Routes>
    </Router>
  </div>;
}

export default App;
