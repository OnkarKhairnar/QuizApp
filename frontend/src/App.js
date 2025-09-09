import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Register from "./pages/Register";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<h1 className="p-10 text-center">About Page</h1>} />
            <Route path="/login" element={<h1 className="p-10 text-center">Login Page</h1>} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
