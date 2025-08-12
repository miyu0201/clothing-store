"use client"
import "./NavBar.css";
import React, { useState, useEffect } from 'react';
import { Navbar, NavbarToggler, Collapse, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./NavBarLinkCustom.css";

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
    name: 'Teenage girl',
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
    name: 'Teenage boy',
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
    name: 'Girls',
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
    name: 'Boys',
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
    name: 'Home',
    links: ['New', 'Decor', 'Bedding', 'On sale', 'Best seller']
  },
];



const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Use string tab IDs, default to first tab
  const [activeTab, setActiveTab] = useState("0");

  const toggle = () => setIsOpen(!isOpen);
  const handleTab = (tabId: string) => {
    setActiveTab(tabId);
    setIsOpen(true);
  };

  return (
    <Navbar  expand="md">
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav tabs >
          {categories.map((cat, idx) => (
            <NavItem key={cat.name}>
              <NavLink
                className={activeTab === idx.toString() ? "active" : ""}
                onClick={e => { e.preventDefault(); handleTab(idx.toString()); }}
                href="#"
              >
                {cat.name}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
        <TabContent activeTab={activeTab}>
          {categories.map((cat, idx) => (
            <TabPane tabId={idx.toString()} key={cat.name}>
              {Array.isArray(cat.links) && cat.links.length > 0 && typeof cat.links[0] === 'object' ? (
                <div className="row">
                  {cat.links.map((link: any) => (
                    <div className="col-md-3 mb-3" key={link.name}>
                      <h6>{link.name}</h6>
                      <ul className="list-unstyled">
                        {link.sublinks && link.sublinks.map((sublink: string) => (
                          <li key={sublink}><a href="#">{sublink}</a></li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="list-unstyled">
                  {cat.links.map((link: any) => (
                    <li key={typeof link === 'string' ? link : link.name}><a href="#">{typeof link === 'string' ? link : link.name}</a></li>
                  ))}
                </ul>
              )}
            </TabPane>
          ))}
        </TabContent>
      </Collapse>
    </Navbar>
  );
};

export default NavBar;
