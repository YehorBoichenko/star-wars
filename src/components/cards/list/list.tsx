
'use client';

import { FC } from "react";
import { CharacterType } from "@/types/charachter";
import CharacterItem from "@/components/cards/item/item";

type CharacterListProps = {
  character: CharacterType[];
}

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



