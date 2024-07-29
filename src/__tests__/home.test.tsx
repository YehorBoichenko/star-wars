import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '@/app/page';
import { initCanvasAnimation } from '@/helpers/canvasAnimation';

// Mock the initCanvasAnimation function
jest.mock('@/helpers/canvasAnimation', () => ({
  initCanvasAnimation: jest.fn(),
}));

describe('Home component', () => {
  it('renders the header with correct title', () => {
    render(<Home />);
    expect(screen.getByText('Welcome to star wars infobook!')).toBeInTheDocument();
  });

  it('renders the link to start journey', () => {
    render(<Home />);
    expect(screen.getByRole('link', { name: /start journey/i })).toBeInTheDocument();
  });

  it('renders the animation description', () => {
    render(<Home />);
    expect(screen.getByText(/this animation is inspired by CODEPEN. To jump to the hyperspace just click the mouse/i)).toBeInTheDocument();
  });

  it('calls initCanvasAnimation with the canvas element', () => {
    render(<Home />);
    const canvas = document.querySelector('canvas');
    expect(initCanvasAnimation).toHaveBeenCalledWith(canvas);
  });
});
