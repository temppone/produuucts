import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const Footer = (props: Props) => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/registration">Products</Link>
      </li>
    </ul>
  );
};

export default Footer;
