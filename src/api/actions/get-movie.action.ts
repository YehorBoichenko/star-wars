'use server';

import api from '@/api/api';

/**
 * Fetch films by a character's ID
 * @param {number} characterId - The ID of the character
 * @returns {Promise<any>} The list of films related to the character
 */
export async function fetchFilmsByCharacterId(characterId: number): Promise<any> {
  try {
    const response = await api.get(`/films/?characters__contains=${characterId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching films:', error);
    throw new Error('Unable to fetch films');
  }
}
