import HomePage from "./pages/HomePage";
import MyNavbar from "./component/Navbar";
import Footer from "./component/Footer";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Addpage from "./pages/Addpage";
import PersonPage from "./pages/PersonPage";

function App() {
  return (
    <div className="app" >
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Addpage" element={<Addpage />} />
          <Route path="/PersonPage/:personId" element={<PersonPage />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
