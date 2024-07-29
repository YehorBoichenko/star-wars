/**
 * Initializes and starts a canvas animation where entities are spawned and animated based on user interactions and canvas size.
 *
 * @param canvas - The HTMLCanvasElement to which the animation will be applied.
 *
 * This function performs the following:
 * - Sets up the initial animation parameters including the canvas context, power level, and colors.
 * - Defines helper functions for random value generation, entity spawning, and animation updates.
 * - Sets up event listeners for user interactions (mousedown, touchstart, mouseup, touchend) to control the power of the animation.
 * - Updates the animation frame by frame using `requestAnimationFrame`.
 * - Handles canvas resizing by adjusting its size and clearing existing entities.
 * - Tracks the position of the mouse or touch to adjust the target position for entity movement.
 *
 * The `update` function handles:
 * - Clearing and redrawing the canvas.
 * - Updating the position and properties of each entity based on power and animation parameters.
 * - Spawning new entities based on the current power level.
 * - Removing entities that have moved outside the canvas or become too faint.
 *
 * The `resize` function handles:
 * - Adjusting the canvas size to match the window's inner width and height.
 * - Clearing all entities from the canvas.
 *
 * The `init` function handles:
 * - Adding event listeners for mouse and touch interactions.
 * - Adding an event listener for window resize.
 * - Initializing the animation by calling the `update` function.
 *
 * The animation continues indefinitely until the user closes the page or removes the canvas.
 */
export function initCanvasAnimation(canvas: HTMLCanvasElement): void {
  const context = canvas.getContext('2d')!;
  let isPower = false;
  const maxPower = 200;
  let power = 1;
  let entities: any[] = [];
  const colors = [
    { red: 117, green: 197, blue: 209 },
    { red: 78, green: 197, blue: 209 },
    { red: 78, green: 143, blue: 209 },
    { red: 97, green: 143, blue: 209 },
    { red: 25, green: 75, blue: 154 },
    { red: 171, green: 197, blue: 227 },
    { red: 201, green: 184, blue: 231 },
    { red: 140, green: 162, blue: 217 },
    { red: 248, green: 89, blue: 31 }
  ];

  let targetX = canvas.width / 2;
  let targetY = canvas.height / 2;
  let currentX = targetX;
  let currentY = targetY;
  const easing = 0.1;

  function random(value: number, offset: number): number {
    return value + Math.floor((Math.random() - 0.5) * offset);
  }

  function spawnEntity(): void {
    const velocity = {
      x: (Math.random() - 0.5) * 20,
      y: (Math.random() - 0.5) * 20
    };
    const offset = {
      x: random(125, 50) * velocity.x,
      y: random(125, 50) * velocity.y
    };

    entities.push({
      x: targetX + offset.x,
      y: targetY + offset.y,
      previousPosition: { x: 0, y: 0 },
      velocity,
      isSpawned: false,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: 0
    });
  }

  function update(time: number): void {
    context.fillStyle = 'rgba(0, 0, 0, 0.2)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    currentX += (targetX - currentX) * easing;
    currentY += (targetY - currentY) * easing;

    entities.forEach((entity, index) => {
      if (isPower) {
        if (entity.opacity <= 0.75 && !entity.isSpawned) {
          entity.opacity = Math.min(0.75, entity.opacity + 0.125);

          if (entity.opacity === 0.75) {
            entity.isSpawned = true;
          }
        }
      } else {
        if (!entity.isSpawned) {
          entity.opacity = 0.75;
          entity.isSpawned = true;
        }
      }

      context.globalCompositeOperation = 'lighter';

      const distance = Math.hypot(currentX - entity.x, currentY - entity.y);
      const multiplier = distance / 200;
      context.beginPath();
      context.arc(entity.x, entity.y, 0.5 * multiplier, 0, Math.PI * 2, false);
      context.closePath();
      context.fillStyle = `rgba(${entity.color.red}, ${entity.color.green}, ${entity.color.blue}, ${entity.opacity})`;
      context.fill();

      context.beginPath();
      context.moveTo(entity.x, entity.y);
      context.lineTo(entity.previousPosition.x || entity.x, entity.previousPosition.y || entity.y);
      context.closePath();
      context.lineWidth = multiplier;
      context.strokeStyle = `rgba(${entity.color.red}, ${entity.color.green}, ${entity.color.blue}, ${entity.opacity})`;
      context.stroke();

      context.globalCompositeOperation = 'source-over';

      entity.previousPosition.x = entity.x;
      entity.previousPosition.y = entity.y;

      entity.x += entity.velocity.x * (power / (maxPower / 1.25));
      entity.y += entity.velocity.y * (power / (maxPower / 1.25));

      if (entity.isSpawned) {
        entity.opacity *= 0.9875;
      }

      if (isPower) {
        entity.velocity.x *= 1.25;
        entity.velocity.y *= 1.25;
      }

      if (
        entity.previousPosition.x < 0 ||
        entity.previousPosition.x > canvas.width ||
        entity.previousPosition.y < 0 ||
        entity.previousPosition.y > canvas.height ||
        entity.opacity <= 5e-2
      ) {
        entities.splice(index, 1);
      }
    });

    for (let i = 0; i < Math.floor(power); i++) {
      spawnEntity();
    }

    if (isPower) {
      power = Math.min(maxPower, power + 0.35);
    } else {
      power = Math.max(1, power * 0.85);
    }

    requestAnimationFrame(update);
  }

  function resize(): void {
    [canvas.width, canvas.height] = [innerWidth, innerHeight];

    entities = [];
  }

  function init(): void {
    ['mousedown', 'touchstart'].forEach((type) => {
      canvas.addEventListener(type, (event) => {
        event.preventDefault();

        isPower = true;
      });
    });

    ['mouseup', 'touchend'].forEach((type) => {
      canvas.addEventListener(type, (event) => {
        event.preventDefault();

        isPower = false;
      });
    });

    window.addEventListener('mousemove', (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      power = Math.min(maxPower, power * 1.125);
    });

    resize();

    requestAnimationFrame(update);
  }

  window.addEventListener('resize', resize);
  init();
}
