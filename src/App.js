import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex justify-center items-start min-h-screen bg-gradient-to-t from-white to-[#FFFDF6] ">
      <div className="w-[1084px]">
        <Header />
        <Body />
      </div>
    </div>
  );
}

export default App;
