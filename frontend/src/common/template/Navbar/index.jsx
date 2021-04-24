import React, { useContext, useState } from 'react';

import { AuthContext } from '../../../contexts/AuthContext';

const Navbar = () => {

  const { loggedUser, userKey } = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);

  function changeOpen() {
    setIsOpen(prevState => !prevState);
  }

  function logout() {
    localStorage.removeItem(userKey);
  }
  
  return (
    <div className="navbar-custom-menu">
      <ul className="nav navbar-nav">
        <li
          onMouseLeave={()=> changeOpen()}
          className={`dropdown user user-menu ${isOpen ? 'open' : ''}`}>
          <a
            href="#"
            onClick={()=> changeOpen()}
            aria-expanded={isOpen ? 'true' : 'false'}
            className="dropdown-toggle"
            data-toggle="dropdown">
            <img src="https://github.com/brunocrez.png" className="user-image" alt="User" />
            <span className="hidden-xs">{loggedUser.user.name}</span>
          </a>
          <ul className="dropdown-menu">
            <li className="user-header">
              <img src="https://github.com/brunocrez.png" className="img-circle" alt="User" />
              <p>{loggedUser.user.name}<small>{loggedUser.user.email}</small></p>
            </li>
            <li className="user-footer">
              <div className="pull-right">
                <a href="#" onClick={logout} className="btn btn-default btn-flat">Sair</a>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;