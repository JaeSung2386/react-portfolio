import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  const MENUS = ["Home", "About", "Skills", "Portfolio", "Contact"];

  return (
    <nav>
      <ul class="horizontal-list">
        {MENUS.map((item, index) => {
          const path = item !== "Home" ? item.toLowerCase() : `/`;
          return (
            <li>
              <Link key={index} className="link" to={`${path}`}>
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navigation;
