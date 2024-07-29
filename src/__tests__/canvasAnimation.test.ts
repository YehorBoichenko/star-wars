import { initCanvasAnimation } from '@/helpers/canvasAnimation';

describe('initCanvasAnimation', () => {
  let canvas: HTMLCanvasElement;
  let context: CanvasRenderingContext2D;

  beforeEach(() => {
    canvas = document.createElement('canvas');
    context = {
      fillRect: jest.fn(),
      beginPath: jest.fn(),
      arc: jest.fn(),
      closePath: jest.fn(),
      fill: jest.fn(),
      moveTo: jest.fn(),
      lineTo: jest.fn(),
      stroke: jest.fn(),
      clearRect: jest.fn(),
      globalCompositeOperation: 'source-over',
      fillStyle: '',
      lineWidth: 0,
      strokeStyle: ''
    } as unknown as CanvasRenderingContext2D;

    jest.spyOn(canvas, 'getContext').mockReturnValue(context);

    // Mock requestAnimationFrame
    jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
      setTimeout(() => cb(0), 0); // Avoid stack overflow
      return 0;
    });

    // Mock addEventListener
    jest.spyOn(canvas, 'addEventListener');
    jest.spyOn(window, 'addEventListener');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should initialize the canvas animation and set up event listeners', () => {
    initCanvasAnimation(canvas);

    expect(canvas.getContext).toHaveBeenCalledWith('2d');
    expect(canvas.addEventListener).toHaveBeenCalledWith('mousedown', expect.any(Function));
    expect(canvas.addEventListener).toHaveBeenCalledWith('touchstart', expect.any(Function));
    expect(canvas.addEventListener).toHaveBeenCalledWith('mouseup', expect.any(Function));
    expect(canvas.addEventListener).toHaveBeenCalledWith('touchend', expect.any(Function));
    expect(window.addEventListener).toHaveBeenCalledWith('mousemove', expect.any(Function));
    expect(window.addEventListener).toHaveBeenCalledWith('resize', expect.any(Function));
    expect(window.requestAnimationFrame).toHaveBeenCalled();
  });

});
