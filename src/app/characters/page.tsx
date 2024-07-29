'use client';
import { FC, useCallback, useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import CharacterList from '@/components/cards/list/list';
import useCharacters from '@/hooks/useCharacters';
import useCharacterSearch from '@/hooks/useSearch';
import { debounce } from '@/helpers/debounce';
import Notification from '@/components/ui/notification';
import SearchBar from '@/components/ui/searchbar';
import Loader from '@/components/ui/loader';
import Title from '@/components/ui/title';

/**
 * CharactersPage is a React functional component that displays a list of characters
 * with search and infinite scrolling functionality.
 *
 * @component
 * @example
 * return (
 *   <CharactersPage />
 * )
 */
const CharactersPage: FC = () => {
  // Extracting values and methods from the custom hook useCharacters
  const { charactersList, hasNextPage, loading, errorMessage, loadMoreCharacters } = useCharacters();

  // Extracting values and methods from the custom hook useCharacterSearch
  const { filteredCharacters, handleSearch } = useCharacterSearch(charactersList);

  // State for tracking the loading status of additional characters
  const [isFetching, setIsFetching] = useState<boolean>(false);

  // Ref to store the previous vertical scroll position
  const prevScrollY = useRef<number>(0);

  // Handles infinite scrolling by loading more characters when scrolled to the bottom
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = useCallback(
    debounce(async () => {
      if (loading || isFetching || !hasNextPage) return;
      const isBottom =
        window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 50;
      if (isBottom) {
        setIsFetching(true);
        await loadMoreCharacters();
        setIsFetching(false);
      }
    }, 200),
    [loading, loadMoreCharacters, isFetching, hasNextPage]
  );

  // Adds and removes scroll event listeners for infinite scrolling
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Scrolls to the previous scroll position when loading status changes
  useEffect(() => {
    if (!loading) {
      window.scrollTo(0, prevScrollY.current);
    }
  }, [loading]);

  // Stores the current scroll position in a ref
  useEffect(() => {
    const handleScroll = () => {
      prevScrollY.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 p-6 bg-black min-h-screen">
      <Link
        data-testid="mainpage-link"
        href="/"
        className="absolute top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 z-[100]"
      >
        Go to Mainpage
      </Link>
      <Title as="h2" className="mt-8 text-white">
        List of characters of the far far galaxy
      </Title>
      <SearchBar
        testId="searchbar"
        onSearch={handleSearch}
        placeholder="Searching by all parameters"
        className="my-3 w-[650px] border-gold glowing-border"
      />
      {errorMessage && <Notification notification={errorMessage} isError={true} />}
      <CharacterList character={filteredCharacters} />
      {loading && (
        <div className="fixed bottom-0 left-0 right-0 flex justify-center items-center my-20">
          <Loader color="gold" />
        </div>
      )}
    </div>
  );
};

export default CharactersPage;
