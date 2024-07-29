'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

/**
 * `NotFound` is a functional React component that displays a "404 Not Found" page.
 * It shows a loading spinner for 2 seconds before displaying the error message.
 *
 * The component utilizes React hooks:
 * - `useState` to manage the loading state.
 * - `useEffect` to handle the timer that simulates loading.
 *
 * It also uses Next.js components:
 * - `Link` for navigation back to the home page.
 * - `Image` for displaying an error image.
 *
 * @returns {JSX.Element} The rendered `NotFound` component.
 */
const NotFound: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {loading ? (
        <div id="carga" data-testid="loading-spinner"  className="flex justify-center items-center h-screen">
          <div className="spinner-grow text-info" />
        </div>
      ) : (
        <div id="rcorners" className="flex flex-col justify-center items-center">
          <fieldset className="mx-auto mt-20 rounded-2xl border-2 border-gray-600 w-full max-w-lg p-6">
            <legend className="ml-8 relative bottom-1.5 left-1 text-lg font-semibold text-gray-600">ERROR</legend>
            <div id="cont" className="flex justify-center items-center">
              <span className="num text-6xl mx-4">4</span>
              <Image src="/404.png" alt="vectorpaint" width={120} height={120} className="deathStar w-48 h-48" />
              <span className="num text-6xl mx-4">4</span>
            </div>
          </fieldset>
          <div id="redir" className="mt-12 flex flex-col items-center min-w-full">
            <p className="text-lg font-semibold text-gray-600">Great shot, kid. That was one in a million!</p>
            <p className="text-lg font-semibold text-gray-600">
              Lets get you{' '}
              <Link href="/" data-testid="back-link" className="text-blue-600 hover:text-blue-400">
                back.
              </Link>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotFound;
