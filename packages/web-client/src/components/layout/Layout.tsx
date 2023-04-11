import React from 'react';
import Navbar from '../navbar';
import Footer from '../footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div>
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default Layout;
