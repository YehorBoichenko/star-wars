import { ReactNode, FC } from 'react';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';

import ContentLayout from '@/components/layouts/content-layout';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

/**
 * Metadata for the application
 * @type {Metadata}
 */
export const metadata: Metadata = {
  title: 'SWAPI - application',
  description: 'Next.js test task',
};

/**
 * Root layout component
 * @param {Object} props - The component props
 * @param {ReactNode} props.children - The child components
 * @returns {JSX.Element} The rendered component
 */
const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 text-gray-900`}>
        <ContentLayout>
            {children}

          
        </ContentLayout>
      </body>
    </html>
  );
};

export default RootLayout;
