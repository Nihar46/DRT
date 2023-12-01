import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <div className="logo">
        <h1>DRT</h1>
      </div>
      <nav>
        {/* Add navigation links or other header content as needed */}
        <button onClick={() => navigate("/sign-in")}>Login</button>
      </nav>
    </header>
  );
};

export default Header;
