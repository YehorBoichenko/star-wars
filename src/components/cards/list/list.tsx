'use client';

import { FC } from 'react';
import { CharacterType } from '@/types/character';
import CharacterItem from '@/components/cards/item/item';

/**
 * Props for the `CharacterList` component.
 */
type CharacterListProps = {
  /**
   * Array of character objects to be displayed in the list.
   * Each object should conform to the `CharacterType` type.
   */
  character: CharacterType[];
};

/**
 * `CharacterList` component renders a grid of `CharacterItem` components.
 *
 * This component takes an array of characters and displays them in a responsive grid layout.
 * If the `character` prop is not an array, the component will render nothing.
 *
 * @param {CharacterListProps} props - The props object containing the `character` array.
 * @returns {JSX.Element | null} - Returns a grid of `CharacterItem` components or `null` if `character` is not an array.
 */
const CharacterList: FC<CharacterListProps> = ({ character = [] }) => {
  if (!Array.isArray(character)) {
    return null;
  }

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {character.map((char) => {
        return <CharacterItem key={char.id} character={char} />;
      })}
    </div>
  );
};

export default CharacterList;
