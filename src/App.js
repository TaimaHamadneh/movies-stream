import React from 'react';
import NavBar from './NavBar';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import BodyContent from './BodyContent';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="Movie">
      <div className="Home-page">
        <div className="left-sidebar">
          <LeftSidebar />
        </div>
        <div className="main-content">
          <NavBar />
          <BodyContent />
        </div>
        <div className="right-sidebar">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}

export default App;
