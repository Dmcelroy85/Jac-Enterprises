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

    const API_URL = 'https://images-api.nasa.gov/search';

    useEffect(() => {
        
        const searchImages = async () => {
            setIsSearching(true); 
            setIsLoading(true); 
            try {
                const response = await fetch(`${API_URL}?q=${searchTerm}`);
                const data = await response.json();
                console.log(data)
                if (JSON.stringify(response)==="{}"){
                setSearchResults(data.collection.items);}
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setIsSearching(false); 
                setIsLoading(false); 
            }
        };

        if (searchTerm) {
            searchImages();
        }
    }, [searchTerm]);

    const showImageDetails = (image: React.SetStateAction<null>) => {
        setSelectedImage(image);
    };

    const clearSearch = () => {
        setSearchTerm('');
        setSearchResults([]);
        setSelectedImage(null);
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
                <input
                    type="text"
                    placeholder="Search NASA Images"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={`custom-search-input ${isSearching ? 'searching' : ''}`}
                />
                {isLoading && <LoadingIndicator />}
                <button onClick={clearSearch}>Clear Search</button>
                <button className="scroll-button" onClick={scrollToTop}>
                    Scroll to Top
                </button>
                <div className="image-results">
                    {searchResults.map((item) => (
                        <div key={item.data[0].nasa_id} onClick={() => showImageDetails(item)}>
                            <img src={item.links[0].href} alt={item.data[0].title} />
                            <p>{item.data[0].title}</p>
                        </div>
                    ))}
                </div>
            </header>
            <footer className="App-footer">
                © Jac Enterprises 2023
            </footer>
        </div>
    );
}

export default App;
