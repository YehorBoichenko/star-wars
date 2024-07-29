'use client';

import { ReactNode, FC, ElementType } from 'react';

interface TextProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

/**
 * Text component for rendering text elements with specified styles.
 * @param {TextProps} props - The component props
 * @param {ElementType} [props.as='p'] - The HTML element to render (default: 'p')
 * @param {string} [props.className] - The CSS class names to apply
 * @param {ReactNode} props.children - The child components
 * @returns {JSX.Element} The rendered component
 */
const Text: FC<TextProps> = ({ as: Element = 'p', className = '', children }) => {
  return <Element className={`text-base ${className}`}>{children}</Element>;
};

export default Text;
