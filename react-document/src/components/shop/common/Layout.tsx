import React from 'react';

interface PropsLayout {
  header: React.ReactNode;
  children: React.ReactNode;
  footer: React.ReactNode;
}

export const Layout = ({ header, children, footer }: PropsLayout) => {
  return (
    <div className="w-full max-w-sm min-h-screen mx-aut shadow-sm relative">
      <header>{header}</header>
      <main>{children}</main>s
      <footer className="position absolute bottom-0">{footer}</footer>
    </div>
  );
};
