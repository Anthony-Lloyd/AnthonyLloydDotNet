import React, { useState } from 'react';
import { useDarkMode } from './_DarkModeContext';
import './styles/_darkmodetoggle.css';

const DarkModeToggle: React.FC = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const [isVisible, setIsVisible] = useState(true);

    const buttonBaseClass = `btn btn-light`; // Removed the responsiveClass

    const hideButtonBaseClass = 'btn btn-secondary';
    const showButtonClass = 'btn btn-sm btn-primary';

    return (
        <div className="position-fixed bottom-0 right-0 mb-3 mr-3">
            {isVisible ? (
                <>
                    <button 
                        onClick={toggleDarkMode}
                        className={buttonBaseClass}
                    >
                        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                    </button>
                    <button 
                        onClick={() => setIsVisible(false)}
                        className={`${hideButtonBaseClass} ml-2`}
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
