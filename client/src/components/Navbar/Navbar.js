import React from "react";
import "./Navbar.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar-container">
            <div className="navbar">
                <div className="main tab">
                    <Link to="/main">main</Link>
                </div>
                <div className="book tab">
                    <Link to="/book">book</Link>
                </div>
                <div className="plan tab">
                    <Link to="/plan">plan</Link>
                </div>
            </div>
            <div className="sub">
                <div className="about">
                    <Link to="/about">about</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
