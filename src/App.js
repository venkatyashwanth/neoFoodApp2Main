import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { Home } from "./Pages/Home";
import { Cart } from "./Pages/Cart";
import { NotFound } from "./Pages/NotFound";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <ToastContainer />
         */}
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
