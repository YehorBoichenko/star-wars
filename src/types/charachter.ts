import { ApiResponse } from "./api-types";
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

export type CharacterCharacteristicsType = {
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
};

export type CharacterInformationType = {
  eye_color: string;
  birth_year: string;
  gender: string;
};


export type CharacterResponse = ApiResponse<CharacterType>
