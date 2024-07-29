'use client';

import Title from '@/components/ui/title';
import Image from 'next/image';

interface HeaderProps {
  title: string;
}

/**
 * Header component for the application.
 * @returns {JSX.Element} The Header component.
 */
export default function Header({ title }: HeaderProps): JSX.Element {
  return (
    <header className="fixed top-0 left-5 right-5 z-50">
      <HeaderSection title={title} />
    </header>
  );
}

/**
 * HeaderSection component containing the title and text.
 * @returns {JSX.Element} The HeaderSection component.
 */
interface HeaderSectionProps {
  title: string;
}

function HeaderSection({ title }: HeaderSectionProps): JSX.Element {
  return (
    <section className="flex justify-between items-center bg-black text-white p-6 mt-3 rounded-md border border-gold glowing-border">
      <Image src="/header_logo.png" alt="Logo" width={400} height={80} className="w-40 h-12" />
      <Title as="h3">{title}</Title>
    </section>
  );
}
