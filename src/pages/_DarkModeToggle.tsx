import React, { useState } from 'react';
import { useDarkMode } from './_DarkModeContext';

const DarkModeToggle: React.FC = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const [isVisible, setIsVisible] = useState(true);

    // Define the base classes for the buttons
    const buttonBaseClass = `btn ${isDarkMode ? 'btn-dark' : 'btn-light'}`;
    const hideButtonBaseClass = 'btn btn-secondary';
    const showButtonClass = 'btn btn-sm btn-primary';

    // Add responsive classes for mobile view
    const responsiveClass = 'btn-block d-md-inline-block'; // 'btn-block' for xs to md screens, 'd-md-inline-block' for md and larger screens

    return (
        <div className="position-fixed bottom-0 right-0 mb-3 mr-3">
            {isVisible ? (
                <>
                    <button 
                        onClick={toggleDarkMode}
                        className={`${buttonBaseClass} ${responsiveClass}`}
                    >
                        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                    </button>
                    <button 
                        onClick={() => setIsVisible(false)}
                        className={`${hideButtonBaseClass} ${responsiveClass} ml-2`}
                    >
                        Hide
                    </button>
                </>
            ) : (
                <button 
                    onClick={() => setIsVisible(true)}
                    className={showButtonClass}
                    title="Show Dark Mode Toggle"
                >
                    Show
                </button>
            )}
        </div>
    );
};

export default DarkModeToggle;
