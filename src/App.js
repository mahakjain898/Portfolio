import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex justify-center mt-[43px]">
      <div className="w-[1084px]">
        <Header />
        <Body />
      </div>
    </div>
  );
}

export default App;
