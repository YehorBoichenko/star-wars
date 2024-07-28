'use client';

import { ReactNode } from 'react';

/**
 * ContentLayout component provides a standard layout for the application.
 * 
 * @param {ReactNode} children - The content to be displayed within the layout.
 * @returns {JSX.Element} The main layout with padding and height settings.
 */
const ContentLayout: React.FC<{ children: ReactNode }> = ({ children }) => (
  <>
    {children}
  </>

);

export default ContentLayout;
