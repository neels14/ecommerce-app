import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Success from "./Success";
import Pay from "./Pay";

const App = () => {
    return (
      <Router>
          <Routes>
              <Route exact path="/pay" element={<Pay/>} />
              <Route exact path="/success" element={<Success/>} />
          </Routes> 
    </Router>
  )
}

export default App