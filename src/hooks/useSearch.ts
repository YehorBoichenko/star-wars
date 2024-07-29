import { useState, useEffect } from 'react';
import { characterProperties } from '@/components/cards/list/searching-params';
import { CharacterType } from '@/types/character'; // Make sure to adjust the import path accordingly

const useCharacterSearch = (charactersList: CharacterType[]) => {
  const [filteredCharacters, setFilteredCharacters] = useState<CharacterType[]>(charactersList);

  const handleSearch = (searchTerm: string) => {
    const lowercasedTerm = searchTerm.toLowerCase();
    const filtered = lowercasedTerm
      ? charactersList.filter((character) => {
          return characterProperties.some((property) =>
            character[property]?.toString().toLowerCase().includes(lowercasedTerm)
          );
        })
      : charactersList;
    setFilteredCharacters(filtered);
  };

  useEffect(() => {
    setFilteredCharacters(charactersList);
  }, [charactersList]);

  return { filteredCharacters, handleSearch };
};

export default useCharacterSearch;
