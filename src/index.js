import './assets/fonts/google-fonts/google-fonts.css';
import './assets/fonts/themify-icons/themifiy-icons.css';
import './assets/css/animate.css';
import './assets/css/bootstrap.min.css';
import './assets/css/jquery.magnific-popup.css';
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// Gallery 
// $(window).on("load", function () {
//     var e = $(".gallery-filter")
//         , a = $("#gallery-filter");
//     e.isotope({
//         filter: "*"
//         , layoutMode: "masonry"
//         , animationOptions: {
//             duration: 750
//             , easing: "linear"
//         }
//     }); 
//     a.find("a").on("click", function () {
//         var o = $(this).attr("data-filter");
//         return a.find("a").removeClass("active"), $(this).addClass("active"), e.isotope({
//             filter: o
//             , animationOptions: {
//                 animationDuration: 750
//                 , easing: "linear"
//                 , queue: !1
//             }
//         }), !1
//     })
// });
// // Magnific Popup
// $(".img-zoom").magnificPopup({
//     type: "image"
//     , closeOnContentClick: !0
//     , mainClass: "mfp-fade"
//     , gallery: {
//         enabled: !0
//         , navigateByImgClick: !0
//         , preload: [0, 1]
//     }
// });
