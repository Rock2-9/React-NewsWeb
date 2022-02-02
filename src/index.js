import React from "react";

import "./index.css";
import App from "./App";
import N from "./components/N";
import reportWebVitals from "./reportWebVitals";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

render(
  <BrowserRouter>
    <App />
    <Routes>
      <Route path="/" element={<N country="in" category="general" />} />
      <Route
        path="/business"
        element={<N country="in" category="business" />}
      />
      <Route
        path="/entertainment"
        element={<N country="in" category="entertainment" />}
      />
      <Route path="/general" element={<N country="in" category="general" />} />
      <Route path="/science" element={<N country="in" category="science" />} />
      <Route path="/health" element={<N country="in" category="health" />} />
      <Route path="/sports" element={<N country="in" category="sports" />} />
      <Route
        path="/technology"
        element={<N country="in" category="technology" />}
      />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
