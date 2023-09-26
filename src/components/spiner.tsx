import React from 'react';

interface LoaderProps {
    size?: number;
    color?: string;
}

const Loader: React.FC<LoaderProps> = ({ size = 32, color = '#000' }) => {
    return (
        <div className="loader" style={{ '--size': `${size}px`, '--color': color } as React.CSSProperties}>
            <div className="loader-spinner"></div>
        </div>
    );
};

export default Loader;
