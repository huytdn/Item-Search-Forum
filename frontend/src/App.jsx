import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import viteLogo from "/vite.svg";
import { useAppContext } from "./context/AppContext";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  const { showUserLogin } = useAppContext();

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
