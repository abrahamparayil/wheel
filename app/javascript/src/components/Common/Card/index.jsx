import React from "react";

import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

const Card = ({ children, item }) => (
  <div className="p-4 border mb-4" key={item}>
    {children}
  </div>
);

Card.Header = Header;
Card.HeaderMenu = Header.Menu;
Card.HeaderMenuItem = Header.MenuItem;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
