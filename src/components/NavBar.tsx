"use client"
import "./NavBar.css";
import React, { useState } from 'react';

const categories = [
  {
    name: 'Sale',
    links: ['All Sale', 'Clearance', 'Flash Deals']
  },
  {
    name: 'Women',
    links: [
      {
        name: 'New',
        sublinks: ['Just In', 'Trending', 'Featured']
      },
      {
        name: 'Clothes',
        sublinks: [
          'Tops',
          'Jeans',
          'Basic Clothing',
          'Blouses & Shirts',
          'Pants',
          'Swimwear',
          'Dresses',
          'Skirts',
          'T-Shirts',
        ]
      },
      {
        name: 'Shoes',
        sublinks: ['Heels', 'Flats', 'Boots', 'Sandals']
      },
      {
        name: 'Accessories',
        sublinks: ['Bags', 'Jewelry', 'Hats', 'Belts']
      },
      {
        name: 'On sale',
        sublinks: ['All Sale', 'Clearance', 'Flash Deals']
      },
      {
        name: 'Best seller',
        sublinks: ['Top Rated', 'Most Popular']
      },
    ]
  },
  {
    name: 'Men',
    links: ['New', 'Clothes', 'Shoes', 'Accessories', 'On sale', 'Best seller']
  },
  {
    name: 'Teenage girl',
    links: ['New', 'Clothes', 'Shoes', 'Accessories', 'On sale', 'Best seller']
  },
  {
    name: 'Teenage boy',
    links: ['New', 'Clothes', 'Shoes', 'Accessories', 'On sale', 'Best seller']
  },
  {
    name: 'Girls',
    links: ['New', 'Clothes', 'Shoes', 'Accessories', 'On sale', 'Best seller']
  },
  {
    name: 'Boys',
    links: ['New', 'Clothes', 'Shoes', 'Accessories', 'On sale', 'Best seller']
  },
  {
    name: 'Home',
    links: ['New', 'Decor', 'Bedding', 'On sale', 'Best seller']
  },
];


const NavBar = () => {

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openSubIndex, setOpenSubIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
    setOpenSubIndex(null);
  };

  const handleSubToggle = (subIdx: number) => {
    setOpenSubIndex(openSubIndex === subIdx ? null : subIdx);
  };

  return (
    <nav className="nav-bar">
      <ul className="nav-bar-list">
        {categories.map((cat, idx) => (
          <li key={cat.name} className="nav-bar-item" style={{ position: 'relative' }}>
            <button
              className="nav-bar-link"
              onClick={() => handleToggle(idx)}
              aria-expanded={openIndex === idx}
              aria-controls={`dropdown-${cat.name}`}
              type="button"
            >
              {cat.name}
            </button>
            {openIndex === idx && (
              <div className="nav-bar-dropdown nav-bar-dropdown-full" id={`dropdown-${cat.name}`}>
                {cat.links.map((link) => {
                  const colKey = typeof link === 'string' ? link : link.name;
                  return (
                    <div key={colKey} className="nav-bar-dropdown-col">
                      <div className="nav-bar-dropdown-col-title">{typeof link === 'string' ? link : link.name}</div>
                      {typeof link !== 'string' && link.sublinks && (
                        <ul className="nav-bar-dropdown-sublinks">
                          {link.sublinks.map((sublink) => (
                            <li key={sublink}>
                              <a href="#" className="nav-bar-dropdown-link">{sublink}</a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
