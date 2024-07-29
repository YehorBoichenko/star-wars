import { render, screen, waitFor } from '@testing-library/react';
import NotFound from '@/app/not-found';
import '@testing-library/jest-dom';

describe('NotFound Component', () => {
  it('should display the loading spinner initially', () => {
    render(<NotFound />);

    // Check if the loading spinner is visible
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });

  it('should display the error message after loading', async () => {
    render(<NotFound />);

    // Wait for the spinner to disappear
    await waitFor(() => {
      expect(screen.queryByTestId('loading-spinner')).not.toBeInTheDocument();
    }, { timeout: 3000 }); // Extend timeout if needed

    // Check if the error message and image are visible
    expect(screen.getByText('Great shot, kid. That was one in a million!')).toBeInTheDocument();
    expect(screen.getByAltText('vectorpaint')).toBeInTheDocument();
  });

  it('should navigate back to home page', async () => {
    render(<NotFound />);

    // Wait for the spinner to disappear
    await waitFor(() => {
      expect(screen.queryByTestId('loading-spinner')).not.toBeInTheDocument();
    }, { timeout: 3000 }); // Extend timeout if needed

    // Check if the "back" link is present
    const backLink = screen.getByTestId('back-link');
    expect(backLink).toBeInTheDocument();
    expect(backLink.closest('a')).toHaveAttribute('href', '/');
  });
});
