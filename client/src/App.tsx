import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./common/Header";
import { lazy, Suspense } from "react";
import "./App.css";

const Products = lazy(() => import("./pages/Products"));
const Brands = lazy(() => import("./pages/Brands"));

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/brands" element={<Brands />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
