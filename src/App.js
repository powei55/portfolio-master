import React from "react";
import Header from "./components/Header";
import Activities from "./components/Activities";
import Project from "./components/Project";

function App() {
  return (
    <div className="my-10 mx-5">
        <Header />
        <Activities />
        <Project />
    </div>
  );
}

export default App;
