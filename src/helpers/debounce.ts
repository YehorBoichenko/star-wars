/**
 * Creates a debounced version of the provided callback function.
 * The debounced function will postpone its execution until after
 * the specified wait time has elapsed since the last time it was invoked.
 *
 * @template T - The type of the callback function.
 * @param {T} callback - The function to debounce.
 * @param {number} wait - The number of milliseconds to delay.
 * @returns {(...args: Parameters<T>) => void} - A debounced version of the callback function.
 */
export const debounce = <T extends (...args: any[]) => void>(callback: T, wait: number): (...args: Parameters<T>) => void => {
  let timeoutId: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      callback(...args);
    }, wait);
  };
};
