import { Oval } from 'react-loader-spinner';
import { FC } from 'react';

interface LoaderProps {
  size?: number;
  color?: string;
  className?: string;
}

/**
 * Loader component for displaying a loading spinner.
 * @param {LoaderProps} props - The component props
 * @param {number} [props.size=20] - The size of the spinner
 * @param {string} [props.color='#0754be'] - The color of the spinner
 * @returns {JSX.Element} The rendered component
 */
const Loader: FC<LoaderProps> = ({ size = 45, color = '#0754be', className = '' }) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <Oval
        visible={true}
        height={size}
        width={size}
        color={color}
        ariaLabel="loading"
        secondaryColor={color}
        strokeWidth={2}
      />
    </div>
  );
};

export default Loader;
