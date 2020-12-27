import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const sayHello = () => console.log("say Hello");
  const title = useHover(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);