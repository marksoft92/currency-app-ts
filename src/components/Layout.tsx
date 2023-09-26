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
        <div>
            <Header />
            <Breadcrumbs />
            <div className="content">
                <SideMenu />
                <div className="main">{children}</div>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
