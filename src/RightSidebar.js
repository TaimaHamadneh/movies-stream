import React from 'react';
import Apple from './assets/apple tv.png';
import Disney from './assets/desney tv.jpeg';
import HBO from './assets/HBO.png';
import Hulu from './assets/hulu.png';
import Netflix from './assets/netflix.jpeg';
import Prime from './assets/prime.jpeg';

function RightSidebar() {
    return (
        <aside className="right-sidebar-inner">
            <div className="media-service">
                <h3>Media Service</h3>

                <button className="MediaService-button">
                    <img src={Apple} alt="Apple TV" className="service-icon" />
                    Apple TV
                </button>
                <button className="MediaService-button">
                    <img src={Disney} alt="Apple TV" className="service-icon" />
                    Disney TV
                </button>
                <button className="MediaService-button">
                    <img src={HBO} alt="Apple TV" className="service-icon" />
                    HBO Max
                </button>
                <button className="MediaService-button">
                    <img src={Hulu} alt="Apple TV" className="service-icon" />
                    Hulu
                </button>
                <button className="MediaService-button">
                    <img src={Netflix} alt="Apple TV" className="service-icon" />
                    Netflix
                </button>
                <button className="MediaService-button">
                    <img src={Prime} alt="Apple TV" className="service-icon" />
                    Prime
                </button>

            </div>
            <div className="genre">
                <h3>Genre</h3>
                <button className="genre-button">Action</button>
                <button className="genre-button">Comedy</button>
                <button className="genre-button">Drama</button>
                <button className="genre-button">Sci-Fi</button>
                <button className="genre-button bg">Thriller</button>
                <button className="genre-button">Western</button>
            </div>
        </aside>
    );
}

export default RightSidebar;