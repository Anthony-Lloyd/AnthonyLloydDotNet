import React, { Suspense, useState, useEffect, ComponentType } from 'react';

import { DarkModeProvider } from './pages/_DarkModeContext';

import pages from './pages/_PagesConfig.json';

const App: React.FC = () => {
    const [dynamicComponents, setDynamicComponents] = useState<{ [key: string]: ComponentType<any> }>({});

    useEffect(() => {
        // Filter out non-pages and then dynamically import them
        pages
            .filter(page => page.type !== "component")
            .forEach(page => {
                import(`./pages/${page.id}.tsx`)
                    .then(module => {
                        setDynamicComponents(prev => ({
                            ...prev,
                            [page.id]: module.default
                        }));
                    })
                    .catch(err => {
                        console.error(`Failed to load ${page.id}.tsx`, err);
                    });
            });
        
        // Special handling for Navbar, Footer, and DarkModeToggle since they're constants
        ['_NavBar', '_Footer', '_DarkModeToggle'].forEach(componentId => {
            import(`./pages/${componentId}`).then(module => {
                setDynamicComponents(prev => ({ ...prev, [componentId]: module.default }));
            });
        });

    }, []);

    return (
        <DarkModeProvider>
            <>
                {dynamicComponents["_NavBar"] && React.createElement(dynamicComponents["_NavBar"])}
                <Suspense fallback={<div>Loading...</div>}>
                    {pages.filter(page => page.type !== "component").map(page => {
                        const PageComponent = dynamicComponents[page.id];
                        return (
                            <div id={page.id} key={page.id}>
                                {PageComponent && <PageComponent />}
                            </div>
                        );
                    })}
                </Suspense>
                {dynamicComponents["_DarkModeToggle"] && React.createElement(dynamicComponents["_DarkModeToggle"])}
                {dynamicComponents["_Footer"] && React.createElement(dynamicComponents["_Footer"])}
            </>
        </DarkModeProvider>
    );
}

export default App;
