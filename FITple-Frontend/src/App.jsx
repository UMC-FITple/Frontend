import "./App.css";
import Navbar from "../component/Navbar/Navbar";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* 각자 route 설정하기 */}
      <Routes>
        <Route />
      </Routes>
    </>
  );
}

export default App;
