import React from "react";
import { Header } from "./components/Header";

import './scss/app.scss'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <h1>HELLO</h1>
      </div>
    </div>
  );
}

export default App;
