// 'use client';

// import { FC } from "react";
// import { CharacterType } from "@/types/charachter";
// import Title from '@/components/ui/title';
// import Characteristics from '@/components/cards/item/charachteristics';
// import Information from '@/components/cards/item/information';
// import Link from "next/link";

// type CharacterItemProps = {
//   character: CharacterType;
// }

// const CharacterItem: FC<CharacterItemProps> = ({ character }) => {
//   const characterCharacteristics = {
//     height: character.height,
//     hair_color: character.hair_color,
//     mass: character.mass,
//     skin_color: character.skin_color,
//   };

//   const characterInformation = {
//     birth_year: character.birth_year,
//     eye_color: character.eye_color,
//     gender: character.gender,
//   };

//   const characterLink = `/characters/${character.id}`;

//   return (
//     <Link href={characterLink}>
//       <div className="bg-white shadow-lg rounded-lg p-5 mb-6 hover:shadow-xl transition-shadow duration-200 ease-in-out">
//         <div className="flex items-center justify-between">
          // <Title as="h2">{character.name}</Title>
//         </div>
//         <div className="text-gray-600">
//           <div className="mb-1">
//             <span className="font-medium">Gender: {character.gender}</span>
//           </div>
//           <div className="mb-1">
//             <span className="font-medium">Birth Year: {character.birth_year}</span>
//           </div>
//           <Characteristics data={characterCharacteristics} />
//           <Information data={characterInformation} />
//         </div>
//       </div>
//     </Link>
//   );
// };

'use client';

import { FC } from "react";
import Link from "next/link";
import { CharacterType } from "@/types/charachter";
import Characteristics from '@/components/cards/item/charachteristics';
import Information from '@/components/cards/item/information';
import Title from '@/components/ui/title';
import { IoMale, IoFemale , IoHelpOutline   } from "react-icons/io5";

type CharacterItemProps = {
  character: CharacterType;
}


const CharacterItem: FC<CharacterItemProps> = ({ character }) => {
  const characterCharacteristics = {
    height: character.height,
    hair_color: character.hair_color,
    mass: character.mass,
    skin_color: character.skin_color,
  };

  const characterInformation = {
    birth_year: character.birth_year,
    eye_color: character.eye_color,
    gender: character.gender,
  };

  const characterLink = `/characters/${character.id}`;
  const renderGenderIcon = () => {
    const iconStyle = {
      color: 'black',
      verticalAlign: 'middle',
      marginLeft: '8px',
      fontSize: '1.5em', 
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
