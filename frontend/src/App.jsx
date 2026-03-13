import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { useAppContext } from "./context/AppContext";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Post from "./pages/Post";
import ManagePost from "./pages/ManagePost";
import SearchPage from "./pages/SearchPage";

function App() {
  const { user } = useAppContext();
  const location = useLocation();

  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <div
      className={`min-h-screen flex flex-col ${isAuthPage ? "bg-white" : "bg-[#f0f2f5]"}`}
    >
      {!isAuthPage && <Navbar />}

      <main className="flex-grow w-full">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/post" element={<Post />} />
          <Route
            path="/manage-post"
            element={user ? <ManagePost /> : <Navigate to="/login" />}
          />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </main>

      {!isAuthPage && <Footer />}
    </div>
  );
}

export default App;
