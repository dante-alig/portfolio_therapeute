import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPagelines } from "@fortawesome/free-brands-svg-icons";
import {
  faQuoteLeft,
  faQuoteRight,
  faStar,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

import Home from "./pages/Home";
import Header from "./components/Header";

library.add(faPagelines, faQuoteLeft, faQuoteRight, faStar, faPaperPlane);

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
