import { useLocation, useNavigate } from "react-router-dom";
import "./header.css";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="app-header">
      <div className="logo">7 Shopie</div>
      <nav>
        <a className={location.pathname === '/products' ? 'active' : ''} onClick={() => navigate("/products")}>Products</a>
        <a className={location.pathname === '/brands' ? 'active' : ''} onClick={() => navigate("/brands")}>Brands</a>
      </nav>
    </header>
  )
}

export { Header };
