import "./App.css";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume"; // Make sure to import Resume

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/resume",
    element: <Resume />, // Add the Resume route
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
