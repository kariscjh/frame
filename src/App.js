import React from 'react';
import Header from "./include/Header";
import Footer from "./include/Footer";
import BodyContents from "./include/BodyContents";
import './css/Reset.css';
import './css/App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <BodyContents page="Main" />
        <Footer />
    </div>
  );
}

export default App;
