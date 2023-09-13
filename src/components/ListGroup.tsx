import React, { useState } from 'react';

interface Props {
    items: string[];
    title: string;
    onItemClick: (item: string) => void;
    }

    function ListGroup(props: Props) {
    const { items, title, onItemClick } = props;
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    const handleItemClick = (item: string) => {
        setSelectedItem(item);
        onItemClick(item);
    };

    return (
        <div className="list-group">
        <h2>{title}</h2>
        <ul className="list-group-list">
            {items.map((item) => (
            <li
                key={item}
                className={`list-group-item ${selectedItem === item ? 'active' : ''}`}
                onClick={() => handleItemClick(item)}
                tabIndex={0} // Add tabIndex for keyboard accessibility
                role="button" // Indicate that it's a clickable element
                onKeyPress={(e) => {
                if (e.key === 'Enter') {
                    handleItemClick(item);
                }
                }}
            >
                {item}
            </li>
            ))}
        </ul>
        </div>
    );
}

export default ListGroup;
