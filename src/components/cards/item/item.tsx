'use client';

import { FC } from 'react';
import Link from 'next/link';
import { CharacterType } from '@/types/character';
import Characteristics from '@/components/cards/item/charachteristics';
import Information from '@/components/cards/item/information';
import Title from '@/components/ui/title';
import { IoMale, IoFemale, IoHelpOutline } from 'react-icons/io5';

/**
 * Represents the props for the `CharacterItem` component.
 *
 * @typedef {Object} CharacterItemProps
 * @property {CharacterType} character - The character data to display in the component.
 */
type CharacterItemProps = {
  character: CharacterType;
};

/**
 * A functional React component that displays information about a character.
 *
 * @param {CharacterItemProps} props - The props for the component.
 * @param {CharacterType} props.character - The character data to display.
 * @returns {JSX.Element} The rendered component.
 *
 * @example
 * <CharacterItem
 *   character={{
 *     id: '1',
 *     name: 'Luke Skywalker',
 *     height: '172',
 *     hair_color: 'blond',
 *     mass: '77',
 *     skin_color: 'fair',
 *     birth_year: '19BBY',
 *     eye_color: 'blue',
 *     gender: 'male'
 *   }}
 * />
 */
const CharacterItem: FC<CharacterItemProps> = ({ character }) => {
  const characterCharacteristics = {
    height: character.height,
    hair_color: character.hair_color,
    mass: character.mass,
    skin_color: character.skin_color
  };

  const characterInformation = {
    birth_year: character.birth_year,
    eye_color: character.eye_color,
    gender: character.gender
  };

  const characterLink = `/characters/${character.id}`;

  /**
   * Renders an icon representing the character's gender.
   *
   * @returns {JSX.Element} The gender icon.
   */
  const renderGenderIcon = () => {
    const iconStyle = {
      color: 'black',
      verticalAlign: 'middle',
      marginLeft: '8px',
      fontSize: '1.5em'
    };

    switch (character.gender.toLowerCase()) {
      case 'male':
        return <IoMale style={{ ...iconStyle, color: 'black' }} />;
      case 'female':
        return <IoFemale style={{ ...iconStyle, color: 'pink' }} />;
      default:
        return <IoHelpOutline style={{ ...iconStyle, color: 'black' }} />;
    }
  };

  return (
    <Link href={characterLink}>
      <div className="bg-white shadow-lg rounded-lg p-5 mb-6 border-gold transition-transform hover:scale-105 hover:shadow-xl hover:glowing-border duration-200 ease-in-out">
        <div className="flex items-center ">
          <Title as="h2">{character.name}</Title>
        </div>
        <div className="text-gray-600">
          <div className="mb-1 flex items-center">
            <span className="font-medium">Gender: {character.gender}</span>
            {renderGenderIcon()}
          </div>
          <div className="mb-1">
            <span className="font-medium">Birth Year: {character.birth_year}</span>
          </div>
          <Characteristics data={characterCharacteristics} />
          <Information data={characterInformation} />
        </div>
      </div>
    </Link>
  );
};

export default CharacterItem;
