import React from 'react';
import banner from '../../../assets/banner.png'
const Hero = () => {
    return (
        <div className="hero h-[650px]" style={{ backgroundImage: `url(${banner})` }}>
            {/* <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className=" text-white pt-96">
                    <button className="btn text-white shadow-lg btn-primary">Start a tour</button>
                </div>
            </div> */}
        </div>
    );
};

export default Hero;