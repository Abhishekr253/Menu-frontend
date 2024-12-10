import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuTabs from './components/MenuTabs';
import MenuSection from './components/MenuSection';
import Home from './components/Home';
import Navbar from './components/Navbar';
import AddItem from './components/AddItem';
import Add from './components/Add';


import './components/styles.css';
import Footer from './components/Footer';

const menuData = {
  food: [
    { name: 'Biriyani', description: 'Biryani is a delicious rice dish...', price: 14 },
    { name: 'Pasta', description: 'Pasta is a food made from flour...', price: 8 },
    { name: 'Fried Chicken', description: 'The perfect fried chicken is crispy...', price: 18 },
  ],
  drinks: [
    { name: 'Kannur Cocktail', description: 'A mocktail made with chilled milk...', price: 16 },
    { name: 'Blue Lemon Mojito', description: 'Blue Curaçao, rum, mint...', price: 12 },
    { name: 'Avil milk', description: 'Aval Milk or Avil Milk is a Kerala drink...', price: 16 },
  ],
  brunch: [
    { name: 'BAR 42 MARY', description: 'Tomato juice, horseradish...', price: 14 },
    { name: 'French Toast Casserole', description: 'If you love make-ahead brunch ideas...', price: 14 },
  ],
};

function App() {
  const [activeMenu, setActiveMenu] = useState('food');

  const handleTabClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <Router>
      <div className="menu-container">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <MenuTabs activeMenu={activeMenu} onTabClick={handleTabClick} />
                <MenuSection menu={activeMenu} items={menuData[activeMenu]} />
<Add/>
<Footer/>
              </>
            }
          />
          <Route path="/add-item" element={<AddItem />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;