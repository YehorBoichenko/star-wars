'use client';

import { ReactNode, FC } from 'react';
import cx from 'classnames';

/**
 * Enum for TitleClass styles
 */
export enum TitleClass {
  h1 = 'text-3xl font-bold',
  h2 = 'text-2xl font-bold',
  h3 = 'text-xl font-semibold',
  h4 = 'text-lg font-semibold',
  h5 = 'text-base font-semibold',
}

/**
 * Props for the Title component
 */
interface TitleProps {
  as?: keyof typeof TitleClass;
  className?: string;
  children: ReactNode;
}

/**
 * Title component
 * @param {TitleProps} props - The component props
 * @returns {JSX.Element} The rendered component
 */
const Title: FC<TitleProps> = ({ as: Element = 'h2', children, className }) => {
  const titleClasses = cx(TitleClass[Element], className);

  return <Element className={titleClasses}>{children}</Element>;
};

export default Title;
