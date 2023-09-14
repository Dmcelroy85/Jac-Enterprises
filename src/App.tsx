import React, { useState, useEffect } from 'react';
import ListGroup from "./components/ListGroup";
import ImageDetails from "./components/ImageDetails";
import LoadingIndicator from "./components/LoadingIndicator";
import nasaLogo from './assets/images/NASA_logo.svg.webp';
import './App.css';

function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    const [hasError, setHasError] = useState(false);

    const API_URL = 'https://images-api.nasa.gov/search';

    useEffect(() => {
        const searchImages = async () => {
            setIsSearching(true); // Set isSearching to true when starting the search
            setIsLoading(true); // Set isLoading to true when starting the search

            try {
                const response = await fetch(`${API_URL}?q=${searchTerm}`);
                const data = await response.json();
                
                if (data.collection && data.collection.items) {
                    setSearchResults(data.collection.items); // Update searchResults with fetched data
                } else {
                    setSearchResults([]); // Set results to empty if there are no items
                }
            } catch (error) {
                console.error('Error:', error);
                setHasError(true); // Set hasError to true if there's an error
            } finally {
                setIsSearching(false); // Set isSearching to false when search is complete
                setIsLoading(false); // Set isLoading to false when search is complete
            }
        };

        if (searchTerm) {
            searchImages();
        } else {
            setSearchResults([]); // Clear searchResults when search term is empty
            setHasError(false); // Reset hasError when search term is empty
        }
    }, [searchTerm]);

    const showImageDetails = (image) => {
        setSelectedImage(image); // Set selectedImage to the clicked image
    };

    const clearSearch = () => {
        setSearchTerm(''); // Clear the search term
        setSearchResults([]); // Clear search results
        setSelectedImage(null); // Clear selected image
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="App">
            <header className="App-header">
                <img
                    src={nasaLogo}
                    alt="NASA Logo"
                    className={`nasa-logo ${isSearching ? 'large' : 'small'}`}
                />
                <h1>Mystery Educator</h1>
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search NASA Images"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={`custom-search-input ${isSearching ? 'searching' : ''}`}
                    />
                    {isLoading && <LoadingIndicator />} {/* Display loading indicator while isLoading is true */}
                </div>
                <button onClick={clearSearch} className="clear-button">
                    Clear Search
                </button>
                <button className="scroll-button" onClick={scrollToTop}>
                    Scroll to Top
                </button>
                <div className="image-results">
                    {hasError ? (
                        <p>An error occurred. Please try again later.</p>
                    ) : searchResults.length > 0 ? (
                        searchResults.map((item) => (
                            <div key={item.data?.[0]?.nasa_id} onClick={() => showImageDetails(item)}>
                                <img src={item.links?.[0]?.href} alt={item.data?.[0]?.title} />
                                <p>{item.data?.[0]?.title}</p>
                            </div>
                        ))
                    ) : (
                        isSearching ? (
                            <p>Loading...</p>
                        ) : (
                            <p>No results found.</p>
                        )
                    )}
                </div>
            </header>
            <footer className="App-footer">
                © 2023 Jac Enterprises 
            </footer>
        </div>
    );
}

export default App;
