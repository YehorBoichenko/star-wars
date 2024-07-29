import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import CharactersPage from '@/app/characters/page'; // Adjust the import path if needed
import { mockGetCharactersData } from '@/data/mock/actionsData';

jest.mock('@/api/actions/get-charachters.action');
import { getCharacters } from '@/api/actions/get-charachters.action';
const mockedGetCharacters = getCharacters as jest.MockedFunction<typeof getCharacters>;

describe('SearchBar test case', () => {
  it('Enter in SearchBar "Obi"', async () => {
    mockedGetCharacters.mockResolvedValue(mockGetCharactersData);

    render(<CharactersPage />);

    // Debug the current HTML
    screen.debug();

    // Locate the search bar
    const searchBar = screen.getByTestId('searchbar');

    // Simulate entering text into the search bar
    fireEvent.change(searchBar, { target: { value: 'Obi' } });

    // Verify that the text 'Obi-Wan Kenobi' appears in the document
    await waitFor(() => expect(screen.getByText('Obi-Wan Kenobi')).toBeInTheDocument());
  });
});