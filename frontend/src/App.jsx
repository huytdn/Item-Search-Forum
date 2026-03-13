import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Post from "./pages/Post";

function App() {
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <div className="min-h-screen flex flex-col bg-[#f0f2f5]">
      {!isAuthPage && <Navbar />}

      <main className="flex-grow w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<Post />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      {!isAuthPage && <Footer />}
    </div>
  );
}

export default App;
