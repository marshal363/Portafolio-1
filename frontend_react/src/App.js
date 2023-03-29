/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

import React from "react";

import { About, Footer, Header, Skills, Testimonials, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Work></Work>
      <Skills></Skills>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  );
};

export default App;
