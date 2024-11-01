import React, { Fragment } from 'react';
import Navs from './Components/Nav/Navbar';
import Home from './pages/Home';
import About from './pages/about';
import Products from './pages/products';
import './App.css';

function App() {
    return (
        <Fragment>
            <Navs />
            <Home />
            <About />
            <Products />
        </Fragment>
    );
}

export default App;
