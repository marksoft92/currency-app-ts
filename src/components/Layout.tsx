import React, { ReactNode } from 'react';
import Header from './header';
import Footer from './footer';
import SideMenu from './SideMenu';
import Breadcrumbs from './Breadcrumbs';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <Breadcrumbs />
            <div className="content">
                <SideMenu />
                <main className="main-content">{children}</main>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
