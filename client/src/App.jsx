import { Routes, Route, Link } from "react-router-dom";
//import pages
import Home from "./pages/Home";
import GetHelp from "./pages/GetHelp";
import GetInvolved from "./pages/GetInvolved";
import Resources from "./pages/Resources";
//import styles
import "./App.css";

function App() {
  return (
    <>
      <div>
        <header>
          <img className="logo-img" src="./assets/sbl-logo.png" alt="logo" />

          <h1>Save Brown Lives</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/resources">Resources</Link>
              </li>
              <li>
                <Link to="/gethelp">Get Help</Link>
              </li>
              <li>
                <Link to="/getinvolved">Get Involved</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/gethelp" element={<GetHelp />} />
          <Route path="/getinvolved" element={<GetInvolved />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
