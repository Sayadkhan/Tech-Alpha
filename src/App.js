import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Pruducts from "./Pages/Pruducts";
import Cart from "./Pages/Cart";
import NotFoundPage from "./Pages/NotFoundPage";

const App = () => {
  return (
    <>
      <div className="app min-h-screen bg-gray-50 text-gray-700 text-lg ">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Pruducts" element={<Pruducts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
