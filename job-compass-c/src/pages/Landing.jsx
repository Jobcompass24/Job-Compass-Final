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
                        Welcome to Job Compass, your trusted guide to navigating the professional landscape.
                        Our platform is designed to empower job seekers like you with the tools and resources needed to find the perfect opportunity.
                        </p> <p>
                        With Job Compass, you can explore a vast array of job listings from top companies across industries,
                        all in one convenient location. Our intuitive search filters and personalized recommendations ensure that you discover roles that align with your skills,
                        experience, and career goals.
                        </p>
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
