import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
import { BrowserRouter, createBrowserRouter, Route, Routes } from "react-router";
import { RouterProvider } from "react-router/dom";
import Register from './pages/Register';
import Login from './pages/Login';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>,
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App/>
//   </React.StrictMode>
// );