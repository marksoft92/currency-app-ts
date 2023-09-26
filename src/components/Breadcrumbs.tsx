import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface BreadcrumbsProps { }

const Breadcrumbs: React.FC<BreadcrumbsProps> = () => {
    const location = useLocation();
    const parts = location.pathname.split('/').filter(part => part !== '');

    return (
        <div className="breadcrumbs">
            {parts.map((part, index) => {
                const path = `/${parts.slice(0, index + 1).join('/')}`;
                const isActive = location.pathname === path;

                return (
                    <React.Fragment key={index}>
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
            })}
        </div>
    );
};

export default Breadcrumbs;
