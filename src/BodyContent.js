import React from 'react';
import seriesImage1 from './assets/squid game.png'; 
import seriesImage2 from './assets/dune.png'; 
import seriesImage3 from './assets/shrek.png'; 
import seriesImage4 from './assets/riverdale.png'; 
import seriesImage5 from './assets/Tall_Girl.png'; 


const BodyContent = () => {
    return (
        <div className="body-content">
            <div className="body-content-inner">
                <div className="image-container1">
                    <img src={seriesImage1} alt="Squid Game" className="series-image" />
                    <div className="top-left-label">#1 in series 🔥</div>
                    <div className="series-info-container1">
                        <div className="series-name">Squid Game</div>
                        <div className="series-year">2021</div>
                    </div>
                </div>
                <div className="image-container2">
                    <img src={seriesImage2} alt="Dune" className="series-image" />
                    <div className="top-left-label-rate">★ 4.2</div>
                    <div className="series-info-container1">
                        <div className="series-name">Dune</div>
                        <div className="series-year">2022</div>
                    </div>
                </div>
            </div>

            <div className="main-column">
            <div className="main-div-row">
                <div className="continue-watching">
                    <span className="title"><span className='bold'>Continue Watching </span> (3 Movies Remaining)</span>
                    <button className="see-more-button">See More</button>
                </div>
                <div className="images-container">
                    <div className="image-container">
                        <img src={seriesImage3} alt="Shrek 3" className="series-image" />
                        <div className="series-info-container2">
                            <div className="series-name-container2">Shrek 3 2022</div>
                            <i class="fa-solid fa-play"></i>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src={seriesImage4} alt="Riverdale 2" className="series-image" />
                        <div className="series-info-container2">
                            <div className="series-name-container2">Riverdale 2 2019</div>
                            <i class="fa-solid fa-play"></i>
                        </div>
                    </div>
                </div>
               
            </div>
            <div className="image-container tall-image">
                    <img src={seriesImage5} alt="Tall Girl" className="series-image tall" />
                </div>
            </div>
        </div>
    );
}

export default BodyContent;