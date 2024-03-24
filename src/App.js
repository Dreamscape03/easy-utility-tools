import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dashboard} from "./layouts/Dashboard/Dashboard";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import { Toc } from "./Page/TOC/Toc";
import { Privacy } from "./Page/Privacy/Privacy";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="terms-and-conditions" element={<Toc />} />
        <Route path="privacy-policy" element={<Privacy />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
