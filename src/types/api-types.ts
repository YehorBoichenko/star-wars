/**
 * @interface ApiResponse
 * @template T
 * @property {number} count - The total number of items available.
 * @property {string | null} next - The URL for the next page of results, or null if there are no more pages.
 * @property {string | null} previous - The URL for the previous page of results, or null if this is the first page.
 * @property {T[]} results - An array of items of type T, representing the results for the current page.
 */
export type ApiResponse<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};
