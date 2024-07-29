import React from 'react';
import { render } from '@testing-library/react';
import CharacterList from '@/components/cards/list/list';
import { mockGetCharactersData } from '@/data/mock/actionsData';

// Extract characters from mock data
const characters = mockGetCharactersData.results;

describe('CharacterList component', () => {
  it('renders a list of CharacterItem components', () => {
    const { getAllByText } = render(<CharacterList character={characters} />);

    characters.forEach((char) => {
      expect(getAllByText(char.name)).toHaveLength(1);
    });
  });

  it('renders nothing when `character` is not an array', () => {
    const { container } = render(<CharacterList character={null as any} />);
    expect(container.firstChild).toBeNull();
  });
});
