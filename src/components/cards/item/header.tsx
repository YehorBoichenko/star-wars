// 'use client';


// import Title from '@/components/ui/title';


// /**
//  * CharacterHeader component displays a person's name and provides a button to redirect to their details.
//  *
//  * @param {number} id - The unique identifier of the person.
//  * @param {string} name - The name of the person.
//  * @returns {JSX.Element} The rendered component.
//  */
// const CharacterHeader: React.FC<{  name: string }> = ({  name }) => {



//   return (
//     <div className="flex items-center justify-between">
//       <Title as="h4">{name}</Title>

//     </div>
//   );
// };

// export default CharacterHeader;
'use client';

import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { IoMale, IoFemale  } from "react-icons/io5";

import Title from '@/components/ui/title';
import Text from '@/components/ui/text';
import Loader from '@/components/ui/loader';
import { routes } from '@/settings/routes';

export default function Header({
  id,
  name,
}: {
  id: string;
  name: string;
}) {
  const router = useRouter();

  const handleRedirect = () => {
    router.push(routes.personDetails(id));
    toast(
      <span className="flex items-center gap-3">
        <Loader />
        <Text>You chose {name}</Text>
      </span>,
      { duration: 1000 },
    );
  };

  return (
    <div className="flex items-center justify-between">
      <Title as="h4">{name}</Title>
    </div>
  );
}
