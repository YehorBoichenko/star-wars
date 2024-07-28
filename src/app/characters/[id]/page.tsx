// import { notFound } from 'next/navigation';
// import { type Node } from 'reactflow';
// import Details from '@/components/cards/details/details';
// import { getCharacter } from '@/api/actions/get-charachter.action';
// import { fetchFilmsByPersonId } from '@/api/actions/get-movie.action';
// import { fetchStarshipsByIds } from '@/api/actions/get-ship.action';
// import {
//   generateFilmEdges,
//   generateFilmNodes,
//   generateStarshipEdges,
//   generateStarshipNodes,
// } from '@/helpers/reactFlow';
// import { type MovieType } from '@/types/movie';

// export default async function PersonPage({ params }: any) {
//   const person = await getCharacter(params.id);

//   if (!person) notFound();

//   const films = await fetchFilmsByPersonId(person.id);
//   if (!films || !films.results) notFound();

//   const allStarships = films.results
//     .flatMap((film: MovieType) => film.starships)
//     .filter((starshipId: string) => person.starships.includes(starshipId));
//   const starships = await fetchStarshipsByIds(allStarships);

//   if (!starships || !starships.data) notFound();

//   const personFilmsNodes = generateFilmNodes(films.results);
//   const starshipsNodes = generateStarshipNodes(starships.data);
//   const filmsEdges = generateFilmEdges(person.name, films.results);
//   const starshipEdges = generateStarshipEdges(films.results, starships.data);

//   const initialNodes: Node[] = [
//     {
//       id: person.name,
//       type: 'person-node',
//       data: { label: person.name },
//       position: { x: 170 * personFilmsNodes.length, y: 25 },
//     },
//     ...personFilmsNodes,
//     ...starshipsNodes,
//   ];

//   const initialEdges = [...filmsEdges, ...starshipEdges];

//   return (
//     <section data-testid="person-page" className="h-[88vh]">
//       <Details initialNodes={initialNodes} initialEdges={initialEdges} />
//     </section>
//   );
// }
