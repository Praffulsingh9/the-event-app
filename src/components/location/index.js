import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper"> 
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7002.0517972905!2d77.31978372442904!3d28.65894319409876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb1903851c7f%3A0x24c51ddbe4c5e18a!2sRamprastha+Colony%2C+Surya+Nagar%2C+Ghaziabad%2C+Uttar+Pradesh+201011!5e0!3m2!1sen!2sin!4v1536951380267" 
            width="100%" 
            height="500px" 
            frameborder="0" 
            allowFullScreen></iframe>

            <div className="location_tag">
             <div>Location</div>  
            </div>

        </div>
    );
};

export default Location;