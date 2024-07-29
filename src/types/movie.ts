/**
 * Represents a movie in the Star Wars universe.
 *
 * @interface MovieType
 * @property {number} id - The unique identifier for the movie.
 * @property {string} title - The title of the movie.
 * @property {number} episode_id - The episode number of the movie.
 * @property {string} opening_crawl - The opening crawl text of the movie.
 * @property {string} director - The name of the movie's director.
 * @property {string} producer - The name of the movie's producer.
 * @property {string} release_date - The release date of the movie in YYYY-MM-DD format.
 * @property {number[]} characters - An array of identifiers for the characters featured in the movie.
 * @property {number[]} planets - An array of identifiers for the planets featured in the movie.
 * @property {number[]} starships - An array of identifiers for the starships featured in the movie.
 * @property {number[]} vehicles - An array of identifiers for the vehicles featured in the movie.
 * @property {number[]} species - An array of identifiers for the species featured in the movie.
 * @property {string} created - The timestamp when the movie record was created.
 * @property {string} edited - The timestamp when the movie record was last edited.
 * @property {string} url - The URL of the movie's resource in the API.
 */
export type MovieType = {
  id: number;
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: number[];
  planets: number[];
  starships: number[];
  vehicles: number[];
  species: number[];
  created: string;
  edited: string;
  url: string;
};
