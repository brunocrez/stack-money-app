import React from 'react';

import Navbar from '../Navbar';

const Header = () => (
  <header className="main-header">
    <a href="/#/" className="logo">
      <span className="logo-mini">
        <i className="fa fa-money"></i>
      </span>
      <span className="logo-lg">
        <i className="fa fa-money"></i>
        <b> Money</b> Control
      </span>
    </a>
    <nav className="navbar navbar-static-top">
      <a href="javascript:;" className="sidebar-toggle" data-toggle="offcanvas"></a>
      <Navbar />
    </nav>
  </header>
);

export default Header;