import React from 'react';

interface ImageDetailsProps {
    image: {
        data: {
        title: string;
        description: string;
        }[];
        links: {
        href: string;
        }[];
    };
    onClose: () => void;
    }

    const ImageDetails: React.FC<ImageDetailsProps> = ({ image }) => {
    return (
        <div className="card">
        <div className="card-body">
            <h5 className="card-title">{image.data[0].title}</h5>
            <p className="card-text">{image.data[0].description}</p>
            {/* You can add more details here if available in the API */}
            <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
            </p>
        </div>
        <img
            src={image.links[0].href}
            className="card-img-bottom"
            alt={image.data[0].title}
        />
        </div>
    );
};

export default ImageDetails;