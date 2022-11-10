import './assets/fonts/google-fonts/google-fonts.css';
import './assets/fonts/themify-icons/themifiy-icons.css';
import './assets/css/animate.css';
import './assets/css/bootstrap.min.css';
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

window.addEventListener("load", function() {
    rootElement.classList.remove("invisible"); 
});