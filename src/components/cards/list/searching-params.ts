import type { CharacterType } from '@/types/character';

/**
 * Type representing the keys of CharacterType
 * @type {keyof CharacterType}
 */
type CharacterProperty = keyof CharacterType;

/**
 * Array of character property keys used as parameters
 * @type {CharacterProperty[]}
 */
export const characterProperties: CharacterProperty[] = [
  'name',
  'height',
  'mass',
  'hair_color',
  'skin_color',
  'eye_color',
  'birth_year',
  'gender'
];
