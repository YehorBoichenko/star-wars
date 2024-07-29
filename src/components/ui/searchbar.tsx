'use client';
import { ChangeEvent, FC, useState } from 'react';
import cx from 'classnames';

/**
 * Props for the `SearchBar` component.
 */
interface SearchBarProps {
  /**
   * Additional CSS class names to apply to the component.
   */
  className?: string;

  /**
   * Placeholder text to display when the input is empty.
   * Defaults to 'Search...'.
   */
  placeholder?: string;

  /**
   * Callback function to handle search term changes.
   *
   * @param searchTerm - The current search term entered by the user.
   */
  onSearch: (searchTerm: string) => void;

  /**
   * Data-testid attribute for testing purposes.
   */
  testId?: string;
}

/**
 * A functional component that renders a search bar input field.
 *
 * @param {SearchBarProps} props - The properties to configure the `SearchBar` component.
 * @returns {JSX.Element} The rendered `SearchBar` component.
 */
const SearchBar: FC<SearchBarProps> = ({ className, placeholder = 'Search...', onSearch, testId }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  /**
   * Handles changes in the search input field.
   *
   * @param {ChangeEvent<HTMLInputElement>} event - The change event from the input field.
   */
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <input
      data-testid={testId}
      type="text"
      value={searchTerm}
      placeholder={placeholder}
      onChange={handleSearchChange}
      className={cx('px-4 py-2 border border-gray-400 rounded-lg w-full text-base', className)}
    />
  );
};

export default SearchBar;
