import React, { useState } from 'react';

const userKey = 'money_user';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  function changeOpen() {
    setIsOpen(prevState => !prevState);
  }

  function logout() {
    localStorage.removeItem(userKey);
    // to do
    // set global state as user: null, validToken: false
  }
  
  const name = "Bruno"
  const email = "bruno@email.com"
  // to do
  // get name and email from global state

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
            <span className="hidden-xs">{name}</span>
          </a>
          <ul className="dropdown-menu">
            <li className="user-header">
              <img src="https://github.com/brunocrez.png" className="img-circle" alt="User" />
              <p>{name}<small>{email}</small></p>
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