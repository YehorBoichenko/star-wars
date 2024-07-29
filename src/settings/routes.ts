/**
 * Defines the routes used in the application.
 */
export const routes = {
  /**
   * The route for the home page.
   * @type {string}
   * @example
   * // Returns the home route
   * routes.home; // '/'
   */
  home: '/',

  /**
   * Generates a route for a specific character's details page.
   * @param {string} id - The unique identifier of the character.
   * @returns {string} The route to the character's details page.
   * @example
   * // Generate a route for character with ID '123'
   * routes.characterDetails('123'); // 'characters/123'
   */
  characterDetails: (id: string) => `characters/${id}`
};
