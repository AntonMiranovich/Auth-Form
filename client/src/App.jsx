import "./App.css";
import { Route, Routes } from "react-router-dom";
import RegPages from "./Pages/RegPages/RegPages";
import HomePages from "./Pages/HomePages/HomePages";
import AuthPages from "./Pages/AuthPages/AuthPages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthPages />}></Route>
        <Route path="/home" element={<HomePages />}></Route>
        <Route path="/reg" element={<RegPages />}></Route>
      </Routes>
    </>
  );
}

export default App;
