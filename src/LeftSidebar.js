import React, { useState } from 'react';
import profile from './assets/image.png';
import profile1 from './assets/image1.jpeg';
import profile2 from './assets/image3.jpeg';
import profile3 from './assets/image2.jpeg';
import { BsFillGridFill, BsCompass ,BsBell, BsBookmark,BsPlay, BsGear } from "react-icons/bs";
import { BiLogOut, BiSolidToggleLeft } from 'react-icons/bi';

const LeftSidebar = () => {
  const [showProfiles, setShowProfiles] = useState(false);

  const toggleProfiles = () => {
    setShowProfiles(!showProfiles);
  };

  return (
    <div className="left-sidebar-inner">
      <div className="profile-pic">
        <img src={profile} alt="Profile Picture" className="profile-image" />
      </div>
      <div className="icon-container">
        <BsFillGridFill/>
        <BsCompass/>
        <BsBookmark/>
        <BsBell/>
        <BsPlay/>
        <BsGear />
        <div className="plus-icon" onClick={toggleProfiles}>
          <i className="fa-solid fa-plus"></i>
          {showProfiles && (
            <div className="profile-pics">
              <img src={profile1} alt="Profile 1" />
              <img src={profile2} alt="Profile 2" />
              <img src={profile3} alt="Profile 3" />
            </div>
          )}
        </div>
      </div>
      <div className="icon-container-row">
        <i className="fa-solid fa-toggle-on"></i>
        <i className="fa-solid fa-arrow-right-from-bracket"></i>
      </div>
    </div>
  );
};

export default LeftSidebar;
