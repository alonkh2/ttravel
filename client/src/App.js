import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <div className="header">
                    <Navbar />
                </div>
                <div className="content">
                  <Routes>
                      <Route exact path="/" element={<Home />} />
                      <Route exact path="/main" element={<Main />} />
                      <Route exact path="/book" element={<Book />} />
                      <Route exact path="/plan" element={<Plan />} />
                      <Route exact path="/about" element={<About />} />
                  </Routes>
                </div>
            </Router>
        </div>
    );
}

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
};

const Book = () => {
    return (
        <div>
            <h1>Book</h1>
        </div>
    );
};

const Plan = () => {
    return (
        <div>
            <h1>Plan</h1>
        </div>
    );
};

const About = () => {
    return (
        <div>
            <h1>About</h1>
        </div>
    );
};

export default App;
