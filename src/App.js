import React, { useState } from "react";
import SongSearch from "./components/SongSearch";
import Footer from "./components/Footer";

function App() {
  const [position, setPosition] = useState("fixed");

  const footerPosition = () => setPosition("static");

  return (
    <>
      <div className="container">
        <a href="index.html">
          <h1>Buscador Letras e Intérpretes</h1>
        </a>
        <SongSearch footerPosition={footerPosition} />
        <Footer position={position} />
      </div>
    </>
  );
}

export default App;
