import React from "react";
import '../../app.css';

const Label = () => (
    <label htmlFor="header-search" className="search-label">
    <span className="search-logo">
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M12.688 18.688C16.001 18.688 18.688 16 18.688 12.688C18.688 9.376 16 6.688 12.688 6.688C9.376 6.688 6.688 9.376 6.688 12.688C6.688 16 9.376 18.688 12.688 18.688ZM20.688 18.688L27.313 25.313L25.313 27.313L18.688 20.688V19.625L18.313 19.25C16.813 20.563 14.813 21.313 12.688 21.313C7.875 21.313 4 17.5 4 12.688C4 7.876 7.875 4 12.688 4C17.501 4 21.313 7.875 21.313 12.688C21.313 14.813 20.563 16.813 19.25 18.313L19.625 18.688H20.688Z" fill="#696969"/>
    </svg>

        {/* <img 
        className="search-logo"
        src="../public/magnifying-glass.svg"
        alt="magnifying glass logo"
        /> */}
    </span>
    </label>
);


export default Label;