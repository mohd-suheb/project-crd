import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ToastContainer } from "react-toastify";
// import  "react-toastify/dist/Reacttoastify.css";
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="bg-red-400"> 
     <App />
     <ToastContainer/>
  
  </div>
  
  
);
