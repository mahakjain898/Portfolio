import React from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
function App() {
  return (
    <div className="flex justify-center items-start min-h-screen bg-gradient-to-t from-white to-[#FFFDF6]">
      <div className="w-[1084px]">
        <Header />
        <Body />
      </div>
    </div>
  );
}

export default App;
