import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Service from "./components/Service";
import Skills from "./components/Skills";
import Testimonial from "./components/Testimonial";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/service" element={<Service />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/testimonial" element={<Testimonial />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
