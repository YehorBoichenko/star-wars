import { ApiResponse } from './api-types';

/**
 * @interface CharacterType
 * @property {number} id - The unique identifier for the character.
 * @property {string} name - The name of the character.
 * @property {string} height - The height of the character in centimeters.
 * @property {string} mass - The mass of the character in kilograms.
 * @property {string} hair_color - The hair color of the character.
 * @property {string} skin_color - The skin color of the character.
 * @property {string} eye_color - The eye color of the character.
 * @property {string} birth_year - The birth year of the character.
 * @property {string} gender - The gender of the character.
 * @property {number} homeworld - The ID of the homeworld of the character.
 * @property {number[]} films - An array of IDs of the films in which the character appears.
 * @property {number[]} species - An array of IDs of the species the character belongs to.
 * @property {number[]} vehicles - An array of IDs of the vehicles the character has used.
 * @property {number[]} starships - An array of IDs of the starships the character has piloted.
 * @property {string} created - The timestamp when the character record was created.
 * @property {string} edited - The timestamp when the character record was last edited.
 * @property {string} url - The URL of the character's resource in the API.
 */
export type CharacterType = {
  id: number;
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: number;
  films: number[];
  species: number[];
  vehicles: number[];
  starships: number[];
  created: string;
  edited: string;
  url: string;
};

/**
 * @interface CharacterCharacteristicsType
 * @property {string} height - The height of the character in centimeters.
 * @property {string} mass - The mass of the character in kilograms.
 * @property {string} hair_color - The hair color of the character.
 * @property {string} skin_color - The skin color of the character.
 */
export type CharacterCharacteristicsType = {
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
};

/**
 * @interface CharacterInformationType
 * @property {string} eye_color - The eye color of the character.
 * @property {string} birth_year - The birth year of the character.
 * @property {string} gender - The gender of the character.
 */
export type CharacterInformationType = {
  eye_color: string;
  birth_year: string;
  gender: string;
};

/**
 * @interface CharacterResponse
 * @extends {ApiResponse<CharacterType>}
 * @description API response containing a character object.
 */
export type CharacterResponse = ApiResponse<CharacterType>;
