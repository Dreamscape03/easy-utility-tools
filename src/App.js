import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dashboard} from "./layouts/Dashboard/Dashboard";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import { Toc } from "./Page/TOC/Toc";
import { Privacy } from "./Page/Privacy/Privacy";
import { Cookie } from "./Page/Cookie/Cookie";
import { GPACalculator } from "./Page/GPA Calculator/GPACalculator";
import { CGPACalculator } from "./Page/CGPA Calculator/CGPACalculator";
import { OnlineClipboard } from "./Page/Online Clipboard/OnlineClipboard";
import { Home } from "./layouts/Home";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="online-clipboard" element={<OnlineClipboard />} />
        <Route path="terms-and-conditions" element={<Toc />} />
        <Route path="privacy-policy" element={<Privacy />} />
        <Route path="cookie-policy" element={<Cookie />} />
        <Route path="gpa-calculator" element={<GPACalculator />} />
        <Route path="cgpa-calculator" element={<CGPACalculator />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
