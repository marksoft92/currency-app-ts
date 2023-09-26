import React from 'react';

interface LoaderProps {
    size?: number;
    color?: string;
}

const LOADER_SIZE = '--size';
const LOADER_COLOR = '--color';

const Loader: React.FC<LoaderProps> = ({size, color}) => {
    return (
        <div className="loader" style={{ [LOADER_SIZE]: `${size}px`, [LOADER_COLOR]: color } as React.CSSProperties}>
            <div className="loader-spinner"></div>
        </div>
    );
};

Loader.defaultProps = {
    size: 32,
    color: '#000',
};
export default Loader;
