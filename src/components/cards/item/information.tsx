'use client';

import Text from '@/components/ui/text';
import type { CharacterInformationType } from '@/types/character';

/**
 * Props for the Information component.
 */
interface InformationProps {
  /**
   * The data to be displayed, including eye color, birth year, and gender.
   */
  data: CharacterInformationType;
}

/**
 * Component to display character information.
 *
 * @param props - The properties containing character information.
 * @returns The JSX for rendering character information.
 */
export default function Information({ data }: InformationProps) {
  const { eye_color, birth_year, gender } = data;

  return (
    <>
      <Text className="text-center my-4">Known information</Text>
      <section className="flex justify-between">
        <div>
          <Text>
            Eye: <span className="font-light">{eye_color}</span>
          </Text>
          <Text>
            Birth Year: <span className="font-light">{birth_year}</span>
          </Text>
        </div>
        <Text>
          Gender: <span className="font-light">{gender}</span>
        </Text>
      </section>
    </>
  );
}
