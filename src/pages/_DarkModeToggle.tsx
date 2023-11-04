import React, { useState } from 'react';
import { useDarkMode } from './_DarkModeContext';

const DarkModeToggle: React.FC = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const [isVisible, setIsVisible] = useState(true);

    return (
        <div className="position-fixed bottom-0 right-0 mb-3 mr-3">
            { isVisible ? (
                <>
                    <button 
                        onClick={toggleDarkMode}
                        className="btn btn-light"
                    >
                        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                    </button>
                    <button 
                        onClick={() => setIsVisible(false)}
                        className="btn btn-secondary ml-2"
                    >
                        Hide
                    </button>
                </>
            ) : (
                <button 
                    onClick={() => setIsVisible(true)}
                    className="btn btn-sm btn-primary"
                    title="Show Dark Mode Toggle"
                >
                    Show
                </button>
            )}
        </div>
    );
};

export default DarkModeToggle;
