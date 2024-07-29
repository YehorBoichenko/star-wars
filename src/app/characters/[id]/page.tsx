import { notFound } from 'next/navigation';
import { type Node } from 'reactflow';
import CharacterDetails from '@/components/cards/details/details';
import { getCharacterById } from '@/api/actions/get-charachter.action';
import { fetchFilmsByCharacterId } from '@/api/actions/get-movie.action';
import { fetchStarshipsByIds } from '@/api/actions/get-ship.action';
import {
  generateFilmEdges,
  generateFilmNodes,
  generateStarshipEdges,
  generateStarshipNodes
} from '@/helpers/reactFlow';
import { type MovieType } from '@/types/movie';

/**
 * Fetches and renders details for a specific character, including their films and starships.
 *
 * @param params - The parameters for the page, including the ID of the character.
 *
 * @returns A React component that displays the character's details, including a graph of their films and starships.
 *
 * @throws {Error} Throws a `notFound` error if the character, their films, or their starships cannot be found.
 */
export default async function CharacterPage({ params }: any) {
  // Fetch the character data by ID.
  const character = await getCharacterById(params.id);

  // Fetch the films associated with the character.
  const films = await fetchFilmsByCharacterId(character.id);

  // Extract starship IDs from the films and filter them to include only those the character owns.
  const allStarships = films.results
    .flatMap((film: MovieType) => film.starships)
    .filter((starshipId: string) => character.starships.includes(Number(starshipId)));

  // Fetch starship details by their IDs.
  const starships = await fetchStarshipsByIds(allStarships);

  // If character, films, or starships data is not available, trigger a not found response.
  if (!character && !films && !starships) notFound();

  // Generate nodes and edges for films and starships.
  const characterFilmsNodes = generateFilmNodes(films.results);
  const starshipsNodes = generateStarshipNodes(starships.data);
  const filmsEdges = generateFilmEdges(character.name, films.results);
  const starshipEdges = generateStarshipEdges(films.results, starships.data);

  // Define the initial nodes and edges for the graph.
  const initialNodes: Node[] = [
    {
      id: character.name,
      type: 'character-node',
      data: { label: character.name },
      position: { x: 170 * characterFilmsNodes.length, y: 25 }
    },
    ...characterFilmsNodes,
    ...starshipsNodes
  ];

  const initialEdges = [...filmsEdges, ...starshipEdges];

  // Render the characterDetails component with the graph data.
  return (
    <section data-testid="character-page" className="h-[100vh] bg-black">
      <CharacterDetails initialNodes={initialNodes} initialEdges={initialEdges} />
    </section>
  );
}
