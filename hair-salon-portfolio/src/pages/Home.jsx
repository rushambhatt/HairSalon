import PhotoCard from "../components/PhotoCard";
import React, { useEffect, useState } from 'react';

const photoGroups = [
    ["/photos/photo1.jpg", "/photos/photo2.jpg", "/photos/photo3.jpg"],
    ["/photos/IMG_6241.jpg", "/photos/photo2.jpg", "/photos/photo3.jpg"]
    // add more groups as needed
  ];
  

function Home() {

    const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(false); // start fading out
            setTimeout(() => {
                setCurrentGroupIndex((prev) => (prev + 1) % photoGroups.length);
                setIsVisible(true); // fade back in
            }, 600); // timing should match CSS fade duration
        }, 4000); // total interval time per group

        return () => clearInterval(interval);
    }, []);

    return (
    <div className="home">
        <h2>Welcome to my website!</h2>
        <div className={`home-photos slideshow ${isVisible ? "fade-in": "fade-out"}`}>
            {photoGroups[currentGroupIndex]?.map((url, index) => (
                <PhotoCard key={index} className="home-photo-item" photo={{url}}/>
            ))}
        </div>
        
        <div className="home-page-info">
            <div className="home-page-info-item">
                <h2>Services</h2>
                <PhotoCard className="home-photo-item" photo={{url: "/photos/photo1.jpg"}}/>
                <p>Hi</p>
            </div>
            
            <div className="home-page-info-item">
                <h2>Consultations</h2>
                <PhotoCard className="home-photo-item" photo={{url: "/photos/photo2.jpg"}}/>
                <p>There</p>
            </div>
            
            <div className="home-page-info-item">
                <h2>About Me</h2>
                <PhotoCard className="home-photo-item" photo={{url: "/photos/photo3.jpg"}}/>
                <p>Man</p>
            </div>
        </div>
    </div>
    )
}

export default Home