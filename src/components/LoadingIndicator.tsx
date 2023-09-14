import React from 'react';

const LoadingIndicator = () => {
    return (
        <div className="loading-indicator">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default LoadingIndicator;
