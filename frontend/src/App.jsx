import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useAppContext } from "./context/AppContext";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  const { showUserLogin } = useAppContext();

  return (
    <div className="min-h-screen bg-[#edeff1]">
      <Navbar />

      <main className="px-4 md:px-10 lg:px-[170px] mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
