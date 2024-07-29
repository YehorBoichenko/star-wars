import { render, screen } from '@testing-library/react';
import {
  generateFilmNodes,
  generateStarshipNodes,
  generateFilmEdges,
  generateStarshipEdges
} from '@/helpers/reactFlow'; // Update with the correct path
import { mockGetFilmsByCharacterIdData, mockGetStarshipsNameByIdData } from '@/data/mock/actionsData'; // Update with the correct path

describe('Node and Edge Generation Functions', () => {
  it('should generate film nodes correctly', () => {
    const filmNodes = generateFilmNodes(mockGetFilmsByCharacterIdData.results);

    expect(filmNodes).toHaveLength(3); // Adjust based on the actual length of film nodes
    expect(filmNodes).toContainEqual({
      id: 'The Phantom Menace',
      type: 'movie-node',
      data: {
        id: 4,
        label: 'The Phantom Menace',
        starships: [31, 32, 39, 40, 41]
      },
      position: { x: 250, y: 185 }
    });
    expect(filmNodes).toContainEqual({
      id: 'A New Hope',
      type: 'movie-node',
      data: {
        id: 1,
        label: 'A New Hope',
        starships: [2, 3, 5, 9, 10, 11, 12, 13]
      },
      position: { x: 550, y: 185 }
    });
    expect(filmNodes).toContainEqual({
      id: 'The Empire Strikes Back',
      type: 'movie-node',
      data: {
        id: 2,
        label: 'The Empire Strikes Back',
        starships: [3, 10, 11, 12, 15, 17, 21, 22, 23]
      },
      position: { x: 850, y: 185 }
    });
  });

  it('should generate starship nodes correctly', () => {
    const starshipNodes = generateStarshipNodes(mockGetStarshipsNameByIdData.data);

    expect(starshipNodes).toHaveLength(5); // Adjust based on the actual length of starship nodes
    expect(starshipNodes).toContainEqual({
      id: 'X-wing',
      type: 'ship-node',
      data: {
        id: 12,
        label: 'X-wing'
      },
      position: { x: 10, y: 415 }
    });
    expect(starshipNodes).toContainEqual({
      id: 'Calamari Cruiser',
      type: 'ship-node',
      data: {
        id: 27,
        label: 'Calamari Cruiser'
      },
      position: { x: 260, y: 415 }
    });
    expect(starshipNodes).toContainEqual({
      id: 'Republic Cruiser',
      type: 'ship-node',
      data: {
        id: 31,
        label: 'Republic Cruiser'
      },
      position: { x: 510, y: 415 }
    });
    expect(starshipNodes).toContainEqual({
      id: 'Naboo Royal Starship',
      type: 'ship-node',
      data: {
        id: 40,
        label: 'Naboo Royal Starship'
      },
      position: { x: 760, y: 415 }
    });
    expect(starshipNodes).toContainEqual({
      id: 'Scimitar',
      type: 'ship-node',
      data: {
        id: 41,
        label: 'Scimitar'
      },
      position: { x: 1010, y: 415 }
    });
  });

  it('should generate film edges correctly', () => {
    const filmEdges = generateFilmEdges('Obi-Wan Kenobi', mockGetFilmsByCharacterIdData.results);

    expect(filmEdges).toHaveLength(3); // Adjust based on the actual length of film edges
    expect(filmEdges).toContainEqual({
      id: 'Obi-Wan Kenobi-The Phantom Menace',
      source: 'Obi-Wan Kenobi',
      target: 'The Phantom Menace'
    });
    expect(filmEdges).toContainEqual({
      id: 'Obi-Wan Kenobi-A New Hope',
      source: 'Obi-Wan Kenobi',
      target: 'A New Hope'
    });
    expect(filmEdges).toContainEqual({
      id: 'Obi-Wan Kenobi-The Empire Strikes Back',
      source: 'Obi-Wan Kenobi',
      target: 'The Empire Strikes Back'
    });
  });

  it('should generate starship edges correctly', () => {
    const starshipEdges = generateStarshipEdges(
      mockGetFilmsByCharacterIdData.results,
      mockGetStarshipsNameByIdData.data
    );

    expect(starshipEdges).toHaveLength(5); // Adjust based on the actual length of starship edges
    expect(starshipEdges).toContainEqual({
      id: 'The Phantom Menace-Republic Cruiser',
      source: 'The Phantom Menace',
      target: 'Republic Cruiser'
    });
    expect(starshipEdges).toContainEqual({
      id: 'The Phantom Menace-Naboo Royal Starship',
      source: 'The Phantom Menace',
      target: 'Naboo Royal Starship'
    });
    expect(starshipEdges).toContainEqual({
      id: 'The Phantom Menace-Scimitar',
      source: 'The Phantom Menace',
      target: 'Scimitar'
    });
    expect(starshipEdges).toContainEqual({
      id: 'A New Hope-X-wing',
      source: 'A New Hope',
      target: 'X-wing'
    });
    expect(starshipEdges).toContainEqual({
      id: 'The Empire Strikes Back-X-wing',
      source: 'The Empire Strikes Back',
      target: 'X-wing'
    });
  });
});
