'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { initCanvasAnimation } from '@/helpers/canvasAnimation';
import Header from '@/components/ui/header';

/**
 * Home component for the landing page.
 *
 * This component sets up an animation on a canvas element when the component mounts.
 * It also renders a header, a main content section with a canvas background, a link to start a journey,
 * and a description of the animation.
 *
 * @returns {JSX.Element} The rendered Home component.
 */
export default function Home(): JSX.Element {
  useEffect(() => {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    if (canvas) {
      initCanvasAnimation(canvas);
    }
  }, []);

  return (
    <>
      <Header title="Welcome to star wars infobook! " />
      <main className="relative flex min-h-screen flex-col items-center p-24">
        <canvas className="absolute inset-0 w-full h-full"></canvas>
        <Link
          href="/characters"
          className="relative inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-150 ease-in-out mt-auto mb-6"
        >
          Start journey
        </Link>
        <div className="rounded-lg z-10 shadow-md p-6 w-full flex flex-wrap justify-between gap-4 bg-gray-800 text-white">
          <p className="text-lg">
            This animation is inspired by CODEPEN. To jump to the hyperspace just click the mouse
          </p>
        </div>
      </main>
    </>
  );
}
