import { useState, useEffect, useCallback } from "react";
import { getCharacters } from "@/api/actions/get-charachters.action";
import { CharacterType } from "@/types/charachter";

/**
 * Custom hook for fetching people data with pagination.
 * @returns Object containing people data, loading state, error state, and load more function.
 */
const useCharacters = () => {
  const [charactersList, setcharactersList] = useState<CharacterType[]>([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  /**
   * Fetches people data from the API.
   * @param pageNumber - The page number to fetch.
   */
  const fetchPeopleData = useCallback(async (pageNumber: number) => {
    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await getCharacters(pageNumber);
      setcharactersList(prevPeople => {
        // Filter out duplicates by id
        const newPeople = response.results.filter(char => 
          !prevPeople.some(prevChar => prevChar.id === char.id)
        );
        return [...prevPeople, ...newPeople];
      });
      setPage(prevPage => prevPage + 1);
      setHasNextPage(!!response.next);
    } catch (error) {
      setErrorMessage("Error fetching people data.");
      console.error("Error fetching people data:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Loads more people data.
   */
  const loadMorePeople = () => {
    fetchPeopleData(page);
  };

  useEffect(() => {
    const fetchInitialData = async () => {
      await fetchPeopleData(1);
    };
    fetchInitialData();
  }, [fetchPeopleData]);

  return { charactersList, hasNextPage, loading, errorMessage, loadMorePeople };
};

export default useCharacters;

