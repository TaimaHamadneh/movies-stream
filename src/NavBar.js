import React from 'react';

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-left">
        Discover your favourites.
      </div>
      <div className="nav-right">
        <div className="search-container">
          <i className="fa fa-search" aria-hidden="true"></i>
          <input type="text" placeholder="Search here.." className="search-bar" />
        </div>
        <i class="fa fa-sliders" aria-hidden="true"></i>
      </div>
    </div>
  );
}

export default NavBar;