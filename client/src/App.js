import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SideBar from "./components/SideBar";
import Dashboard from "./components/Dashboard";

function App() {
    return (
        <div className="flex flex-col h-screen w-screen text-center text-primary overflow-hidden">
            <Router>
                <div className="w-screen">
                    <Navbar />
                </div>
                <div className="flex flex-grow">
                    <div className="hidden lg:inline">
                        <SideBar />
                    </div>
                    <div className="absolute bottom-0 right-0 left-0 top-24 lg:left-64 max-h-full max-w-full overflow-hidden">
                        <Routes>
                            <Route exact path="/" element={<Dashboard />} />
                            <Route exact path="/login" element={<Book />} />
                            <Route exact path="/plan" element={<Plan />} />
                            <Route exact path="/about" element={<About />} />
                        </Routes>
                    </div>
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
