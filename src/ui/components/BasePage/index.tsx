import React from 'react';

const BasePage = ({ title, children, className }: { title: String; children: React.ReactNode; className?: string }) => (
  <main className="bg-gray-200 flex-1 flex-shrink-0 overflow-x-hidden container mx-auto px-6 py-8 h-screen overflow-y-hidden">
    <h3 className="text-gray-700 text-3xl font-medium">{title}</h3>
    <div className="mt-4 h-full">{children}</div>
  </main>
);

export default BasePage;
