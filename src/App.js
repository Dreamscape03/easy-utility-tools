import React from "react";
import HomePage from "./layouts/HomePage";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Clipboard from "./layouts/clipboard";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/clipboard" element={<Clipboard />} />
      </Routes>
    </Router>
  );
};

export default App;
