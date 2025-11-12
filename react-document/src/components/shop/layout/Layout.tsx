import React from 'react';

interface PropsLayout {
  header: React.ReactNode;
  children: React.ReactNode;
  footer: React.ReactNode;
}

export const Layout = ({ header, children, footer }: PropsLayout) => {
  return (
    <div className="w-full max-w-sm min-h-screen mx-auto shadow-sm relative bg-gray-100">
      <header>{header}</header>
      <main className="overflow-y-auto h-[calc(100vh-56px-56px)]">
        {children}
      </main>
      <footer className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-sm">
        {footer}
      </footer>
    </div>
  );
};
