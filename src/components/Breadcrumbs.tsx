import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface BreadcrumbsProps {}

const renderBreadcrumbItem = (part: string, index: number, isActive: boolean, parts: string[]) => {
    const path = `/${parts.slice(0, index + 1).join('/')}`;

    return (
        <React.Fragment key={part}>
            {index > 0 && <span className="breadcrumb-separator"></span>}
            <span className={`breadcrumb-item${isActive ? ' active' : ''}`}>
                {isActive ? (
                    <span>{part}</span>
                ) : (
                    <Link to={path}>{part}</Link>
                )}
            </span>
        </React.Fragment>
    );
};

const Breadcrumbs: React.FC<BreadcrumbsProps> = () => {
    const location = useLocation();
    const parts = location.pathname.split('/').filter(part => part !== '');

    return (
        <div className="breadcrumbs">
            {parts.map((part, index) => {
                const isActive = location.pathname === `/${parts.slice(0, index + 1).join('/')}`;
                return renderBreadcrumbItem(part, index, isActive, parts);
            })}
        </div>
    );
};

export default Breadcrumbs;
