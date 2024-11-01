import React from "react";
import '../App.css';
import downloadImage from '../assets/images/download.jpg';

const Home = () => {
    return (
        <div className="home">
            <div className="container">
                <div className="content-home">
                    <h4>E-Commerce Website</h4>
                    <p>Build a simple e-commerce product listing page using the Fake
                    Store API..</p>
                    <button className="btn">View Collections</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
