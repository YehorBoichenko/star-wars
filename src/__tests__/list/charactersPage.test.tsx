import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import CharactersPage from '@/app/characters/page';
import { mockGetCharactersData } from '@/data/mock/actionsData';
import useCharacters from '@/hooks/useCharacters';
import useCharacterSearch from '@/hooks/useSearch';
import { useRouter } from 'next/router';

// Mock the custom hooks
jest.mock('@/hooks/useCharacters', () => ({
  __esModule: true,
  default: jest.fn()
}));

jest.mock('@/hooks/useSearch', () => ({
  __esModule: true,
  default: jest.fn()
}));

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}));

// Mock window.scrollTo
Object.defineProperty(window, 'scrollTo', { value: jest.fn() });

describe('CharactersPage', () => {
  let push: jest.Mock;

  beforeEach(() => {
    push = jest.fn();

    (useCharacters as jest.Mock).mockReturnValue({
      charactersList: mockGetCharactersData.results,
      hasNextPage: true,
      loading: false,
      errorMessage: '',
      loadMoreCharacters: jest.fn()
    });

    (useCharacterSearch as jest.Mock).mockReturnValue({
      filteredCharacters: mockGetCharactersData.results,
      handleSearch: jest.fn()
    });

    (useRouter as jest.Mock).mockReturnValue({
      push
    });
  });

  it('renders the page with characters', () => {
    render(<CharactersPage />);

    // Check if the title is rendered
    expect(screen.getByText('List of characters of the far far galaxy')).toBeInTheDocument();

    // Check if the search bar is rendered
    expect(screen.getByTestId('searchbar')).toBeInTheDocument();

    // Check if the character list is rendered
    expect(screen.getByText('Obi-Wan Kenobi')).toBeInTheDocument();
    expect(screen.getByText('Wilhuff Tarkin')).toBeInTheDocument();
  });

  it('displays a notification when there is an error message', () => {
    (useCharacters as jest.Mock).mockReturnValue({
      charactersList: mockGetCharactersData.results,
      hasNextPage: true,
      loading: false,
      errorMessage: 'An error occurred!',
      loadMoreCharacters: jest.fn()
    });

    render(<CharactersPage />);

    // Check if the notification is rendered
    expect(screen.getByText('An error occurred!')).toBeInTheDocument();
  });

  it('triggers the handleSearch function on search', () => {
    const handleSearch = jest.fn();
    (useCharacterSearch as jest.Mock).mockReturnValue({
      filteredCharacters: mockGetCharactersData.results,
      handleSearch
    });

    render(<CharactersPage />);

    // Trigger the search
    fireEvent.change(screen.getByPlaceholderText('Searching by all parameters'), { target: { value: 'Obi-Wan' } });

    // Check if handleSearch was called
    expect(handleSearch).toHaveBeenCalledWith('Obi-Wan');
  });

  it('loads more characters on scroll to bottom', async () => {
    const loadMoreCharacters = jest.fn();
    (useCharacters as jest.Mock).mockReturnValue({
      charactersList: mockGetCharactersData.results,
      hasNextPage: true,
      loading: false,
      errorMessage: '',
      loadMoreCharacters
    });

    render(<CharactersPage />);

    // Simulate scrolling to the bottom
    window.innerHeight = 800; // Adjust this to match the viewport height
    document.documentElement.scrollTop = 0;
    Object.defineProperty(document.documentElement, 'scrollHeight', {
      writable: true,
      value: 1000 // Adjust to ensure it exceeds the viewport height
    });

    fireEvent.scroll(window, {
      target: {
        scrollY: 800 // Simulate scroll position near the bottom
      }
    });

    // Await for any updates or debounce logic if present
    await waitFor(() => {
      expect(loadMoreCharacters).toHaveBeenCalled();
    });
  });

  it('displays a loader when loading characters', () => {
    (useCharacters as jest.Mock).mockReturnValue({
      charactersList: mockGetCharactersData.results,
      hasNextPage: true,
      loading: true,
      errorMessage: '',
      loadMoreCharacters: jest.fn()
    });

    render(<CharactersPage />);

    // Check if the loader is visible. Ensure Loader component has a test ID or specific role.
    expect(screen.getByTestId('oval-loading')).toBeInTheDocument();
  });
});
