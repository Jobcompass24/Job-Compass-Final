import React, { useEffect, useRef } from "react";
import Wrapper from "../assets/css/wrappers/LandingPage";
import { Link } from "react-router-dom";
import photo from "../assets/media/LandingPage/hero.png";
import Navbar from "../components/shared/Navbar";
const Landing = () => {
    const navbarRef = useRef(null);
    const heroRef = useRef(null);

    useEffect(() => {
        const navbarHeight = navbarRef.current.getBoundingClientRect().height;
        heroRef.current.style.minHeight = `calc(100vh - ${navbarHeight}px)`;
    }, []);
    return (
        <>
            <Navbar navbarRef={navbarRef} />
            <Wrapper ref={heroRef}>
                <div className="hero-content">
                    <div className="text-content">
                        <h1>
                            Get Your <span className="fancy">Dream Job </span> 
                            Today!
                        </h1>
                        <p>
                        Welcome to Job Compass, your premier destination for streamlining the job search process. 
                        Developed as part of our final year university project, Job Compass is dedicated to helping individuals
                        find their ideal career opportunities with personalized recommendations tailored to their preferences.
                        Whether you're a job seeker looking to explore new horizons or an employer seeking the perfect candidate,
                        Job Compass offers intuitive features designed to enhance your experience. 
                        Join us on this journey to simplify job hunting and connect talent with opportunity seamlessly
                        <div className="btn-grp">
                            <Link className="btn" to="/all-jobs">
                                Apply Now
                            </Link>
                        </div>
                    </div>
                    <div className="placeholder">
                        <img src={photo} alt="job viva photo" />
                    </div>
                </div>
            </Wrapper>
        </>
    );
};

export default Landing;
