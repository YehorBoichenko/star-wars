import { useState, useEffect, useCallback } from 'react';
import { getCharacters } from '@/api/actions/get-charachters.action';
import { CharacterType } from '@/types/character';

/**
 * Custom hook for fetching characters data with pagination.
 * @returns Object containing characters data, loading state, error state, and load more function.
 */
const useCharacters = () => {
  const [charactersList, setcharactersList] = useState<CharacterType[]>([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  /**
   * Fetches characters data from the API.
   * @param pageNumber - The page number to fetch.
   */
  const fetchCharactersData = useCallback(async (pageNumber: number) => {
    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await getCharacters(pageNumber);
      setcharactersList((prevCharacters) => {
        // Filter out duplicates by id
        const newCharacters = response.results.filter((char) => !prevCharacters.some((prevChar) => prevChar.id === char.id));
        return [...prevCharacters, ...newCharacters];
      });
      setPage((prevPage) => prevPage + 1);
      setHasNextPage(!!response.next);
    } catch (error) {
      if (pageNumber === 1) {
        setErrorMessage('Error fetching initial data.');
      } else {
        setErrorMessage('No more data to fetch.');
        setHasNextPage(false);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Loads more Characters data.
   */
  const loadMoreCharacters = () => {
    if (!loading && hasNextPage) {
      fetchCharactersData(page);
    }
  };

  useEffect(() => {
    const fetchInitialData = async () => {
      await fetchCharactersData(1);
    };
    fetchInitialData();
  }, [fetchCharactersData]);

  return { charactersList, hasNextPage, loading, errorMessage, loadMoreCharacters };
};

export default useCharacters;
