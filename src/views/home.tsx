import React from "react";
import Security from "../components/content/security";
import { About, Gallery, Services, Career, FAQ, ContactUs } from "../pages";

const AppHome = () => {
    return (
        <div className="main">
            <Security />
            <About />
            <Services />
            <Gallery />
            <Career />
            <FAQ />
            <ContactUs />
        </div>
        
    )
}

export default AppHome