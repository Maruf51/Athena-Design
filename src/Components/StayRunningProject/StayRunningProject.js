import React from 'react';
import './StayRunningProject.css';
import runningImage from '../../Image/20 [Converted]@2x.png';

const StayRunningProject = () => {
    return (
        <div>
            <div className="container p-0 d-flex align-items-center">
            
            <div className="col-lg-6 col-md-6 col-sm-12">
                <img className="running-project" src={runningImage} alt=""/>
            </div>

            {/* <div className="col-lg-6 col-md-6 col-sm-12">
                <img className="header-img" src={headerImg} alt=""/>
            </div> */}

            <div className="col-lg-6 col-md-6 col-sm-12 project">
                <h2>Stay Running Project</h2>
                <p>It is a long established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout. The point of
                    using Lorem Ipsum is that it has a more-or-less normal distribution
                    of letter.
                </p>
                <button className="btn navContact mx-2 pricing-btn">See Pricing</button>
            </div>

        </div>
        </div>
    );
};

export default StayRunningProject;