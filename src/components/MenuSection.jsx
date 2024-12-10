

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './style.css'
function MenuSection({ menu, items }) {
  const navigate = useNavigate();

  const url = "http://localhost:3000/item";

  const [menuItem, setMenuItems] = useState([]);
  console.log(menuItem);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch(url, {
          method: "GET", 
          headers: {
            "Content-Type": "application/json", 
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data);

          setMenuItems(data);
        } else {
          console.log("Failed to fetch menu items:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };

    fetchMenuItems();
  }, []);

  const handleAddMenuClick = () => {
    navigate("/add-item");
  };

  return (
    <div id="hom" className={`menu-section ${menu}`}>
      <h2>{menu.charAt(0).toUpperCase() + menu.slice(1)}</h2>
      {menuItem.map((item, index) => (
        <div className="menu-item" key={index}>
          <h3>{item.itemName}</h3>
          <p>{item.description}</p>
          <p>${item.prize}</p>
        </div>
      ))}

      <button
        type="button"
        id='but'
        className="btn btn-info "
        onClick={handleAddMenuClick}
      >
        Add Menu Details
      </button>
    </div>
  );
}

export default MenuSection;