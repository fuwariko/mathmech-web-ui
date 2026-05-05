import React from 'react';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';


type AppLayoutProps = {
  headerContent?: {
    left?: React.ReactNode;
    center?: React.ReactNode;
    right?: React.ReactNode;
  };
  footerContent?: {
    left?: React.ReactNode;
    right?: React.ReactNode;
  };
  children: React.ReactNode;
};

export const AppLayout: React.FC<AppLayoutProps> = ({
  headerContent,
  footerContent,
  children,
}) => (
  <>
    <Header
      left={headerContent?.left}
      center={headerContent?.center}
      right={headerContent?.right}
    />
    <main style={{ flex: 1 }}>
      {children}
    </main>
    <Footer left={footerContent?.left} right={footerContent?.right} />
  </>
);
