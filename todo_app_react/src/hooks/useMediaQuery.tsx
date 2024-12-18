// React hooks for state management and effect.
import { useState, useEffect } from 'react';

// Custom hook for media query.
export const useMediaQuery = (query: string) => {
    // State to track if the query matches.
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        // Creating a MediaQueryList object.
        const media = window.matchMedia(query);

        // Updating the state if there's a change.
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        // Event listener for media query changes.
        const listener = () => {
            setMatches(media.matches);
        };

        // Adding and removing the event listener.
        media.addEventListener('change', listener);
        return () => media.removeEventListener('change', listener);

    }, [matches, query]);

    return matches;
};
