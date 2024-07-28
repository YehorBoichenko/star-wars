// import { ChangeEvent, FC, useState } from 'react';
// import cx from 'classnames';

// interface SearchBarProps {
//   className?: string;
//   placeholder?: string;
//   onSearch: (searchTerm: string) => void;
//   testId?: string;
// }

// /**
//  * SearchBar component
//  * @param {SearchBarProps} props - The component props
//  * @returns {JSX.Element} The rendered component
//  */
// const SearchBar: FC<SearchBarProps> = ({ className, placeholder = 'Search...', onSearch, testId }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   /**
//    * Handle the change event for the search input
//    * @param {ChangeEvent<HTMLInputElement>} event - The change event
//    */
//   const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
//     const value = event.target.value;
//     setSearchTerm(value);
//     onSearch(value);
//   };

//   return (
//     <input
//       data-testid={testId}
//       type="text"
//       value={searchTerm}
//       placeholder={placeholder}
//       onChange={handleSearchChange}
//       className={cx(
//         'px-4 py-2 border border-gray-400 rounded-lg w-full text-base',
//         className,
//       )}
//     />
//   );
// };

// export default SearchBar;
import { ChangeEvent, FC, useState } from 'react';
import cx from 'classnames';

interface SearchBarProps {
  className?: string;
  placeholder?: string;
  onSearch: (searchTerm: string) => void;
  testId?: string;
}

const SearchBar: FC<SearchBarProps> = ({ className, placeholder = 'Search...', onSearch, testId }) => {
  const [searchTerm, setSearchTerm] = useState('');

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
      className={cx(
        'px-4 py-2 border border-gray-400 rounded-lg w-full text-base',
        className,
      )}
    />
  );
};

export default SearchBar;
