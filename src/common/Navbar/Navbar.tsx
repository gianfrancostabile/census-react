import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export interface LinkProps {
  route: string;
  message: string;
  exact?: boolean;
}

interface NavbarProps {
  links: LinkProps[];
}

class Navbar extends Component<NavbarProps> {
  render() {
    const linksContent = this.props.links
      ? this.props.links.map((link, index) => (
          <NavLink to={link.route} key={index} exact={link.exact}>{link.message}</NavLink>
        ))
      : null;

    return <nav className='Navbar'>{linksContent}</nav>;
  }
}

export default Navbar;
