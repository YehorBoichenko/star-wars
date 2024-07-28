'use client';

import Text from '@/components/ui/text';
import type { CharacterCharacteristicsType } from '@/types/charachter';

/**
 * Component to display characteristics of a person.
 * @param {CharacterCharacteristicsType} props - The characteristics data of the person.
 * @returns {JSX.Element} A section containing person characteristics.
 */
export default function PersonCharacteristics({
  data,
}: {
  data: CharacterCharacteristicsType;
}): JSX.Element {
  return (
    <>
      <Text className="text-center my-4">Hero stats: </Text>
      <section className="flex justify-between">
        <div>
          <Characteristic label="Height" value={data.height} />
          <Characteristic label="Mass" value={data.mass} />
        </div>
        <div>
          <Characteristic label="Hair" value={data.hair_color} />
          <Characteristic label="Skin" value={data.skin_color} />
        </div>
      </section>
    </>
  );
}

/**
 * Component to display a single characteristic.
 * @param {string} label - The label of the characteristic.
 * @param {string | number} value - The value of the characteristic.
 * @returns {JSX.Element} A text element containing the label and value of the characteristic.
 */
function Characteristic({
  label,
  value,
}: {
  label: string;
  value: string | number;
}): JSX.Element {
  return (
    <Text>
      {label}: <span className="font-light">{value}</span>
    </Text>
  );
}
