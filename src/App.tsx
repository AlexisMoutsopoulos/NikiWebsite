import NavigationBar from "./components/NavigationBar";
import {AboutPage} from "./components/Pages/AboutPage";
import {ProductPage} from "./components/Pages/ProductPage";
import {ContactPage} from "./components/Pages/ContactPage";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { ItemContainer } from "./components/ItemContainer";
import { HomePage } from "./components/Pages/HomePage";

export const App = () => {
  return (
    <HashRouter>
      <NavigationBar />

      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/:itemId" element={<ItemContainer />} />
      </Routes>
    </HashRouter>
  );
}