/**
 * Represents a starship in the Star Wars universe.
 *
 * @property {number} id - The unique identifier for the starship.
 * @property {string} name - The name of the starship.
 * @property {string} model - The model of the starship.
 * @property {string} manufacturer - The manufacturer of the starship.
 * @property {string} cost_in_credits - The cost of the starship in credits.
 * @property {string} length - The length of the starship in meters.
 * @property {string} max_atmosphering_speed - The maximum speed of the starship in atmospheres.
 * @property {string} crew - The number of crew members required to operate the starship.
 * @property {string} passengers - The number of passengers the starship can carry.
 * @property {string} cargo_capacity - The cargo capacity of the starship in kilograms.
 * @property {string} consumables - The duration for which the starship's consumables can last.
 * @property {string} hyperdrive_rating - The hyperdrive rating of the starship.
 * @property {string} MGLT - The MGLT (Moulinier-Glyder Transfer) rating of the starship.
 * @property {string} starship_class - The classification of the starship.
 * @property {any[]} pilots - A list of pilots associated with the starship.
 * @property {number[]} films - A list of film IDs in which the starship appears.
 * @property {string} created - The date and time when the starship was created.
 * @property {string} edited - The date and time when the starship information was last edited.
 * @property {string} url - The URL of the starship resource.
 */
export type ShipType = {
  id: number;
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: any[];
  films: number[];
  created: string;
  edited: string;
  url: string;
};
