import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="logo-pane">
      <div className="company-info">
        <img
          src="https://www.humanrightsfirst.org/sites/default/files/hrf-logo.png"
          alt="Human Rights First logo"
        />
      </div>
      {/* <div className="user-nav">
        <button>Sign In</button>
        <button>Sign Up</button>
      </div> */}
    </div>
  );
};
export default NavBar;
