import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import FooterWithLinks from "./components/Footer";
import Form from "./pages/Form";
import ThankYouPage from "./pages/ThankYouPage";
import useViewportHeight from "./hooks/useViewportHeight";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-12 md:pt-22 lg:pt-24">
        <Outlet />
      </div>
      <FooterWithLinks />
    </div>
  );
};

export default function App() {
  useViewportHeight();

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products/:slug" element={<Products />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="/form" element={<Form />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Route>
      </Routes>
    </>
  );
}
