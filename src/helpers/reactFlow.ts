import type { MovieType } from '@/types/movie';
import type { ShipType } from '@/types/starship';

/**
 * Creates nodes for films.
 * @param films - Array of films.
 * @returns Array of film nodes.
 */
export function generateFilmNodes(films: MovieType[]) {
  return films.map((film, index) => ({
    id: film.title,
    type: 'movie-node',
    data: {
      id: film.id,
      label: film.title,
      starships: film.starships
    },
    position: { x: 250 + index * 300, y: 185 }
  }));
}

/**
 * Creates nodes for starships.
 * @param starships - Array of starships.
 * @returns Array of starship nodes.
 */
export function generateStarshipNodes(starships: ShipType[]) {
  return starships.map((starship, index) => ({
    id: starship.name,
    type: 'ship-node',
    data: {
      id: starship.id,
      label: starship.name
    },
    position: { x: 10 + index * 250, y: 415 }
  }));
}

/**
 * Creates edges connecting a person to films.
 * @param personName - Name of the person.
 * @param films - Array of films.
 * @returns Array of edges.
 */
export function generateFilmEdges(personName: string, films: MovieType[]) {
  return films.map((film) => ({
    id: `${personName}-${film.title}`,
    source: personName,
    target: film.title
  }));
}

/**
 * Creates edges connecting films to starships.
 * @param films - Array of films.
 * @param starships - Array of starships.
 * @returns Array of edges.
 */
export function generateStarshipEdges(films: MovieType[], starships: ShipType[]) {
  return films.flatMap((film) =>
    film.starships.reduce((edges, starshipId) => {
      const starship = starships.find((ship) => ship.id === starshipId);
      if (starship) {
        edges.push({
          id: `${film.title}-${starship.name}`,
          source: film.title,
          target: starship.name
        });
      }
      return edges;
    }, [] as { id: string; source: string; target: string }[])
  );
}
