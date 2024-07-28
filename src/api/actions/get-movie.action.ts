'use server';

import api from '@/api/api';

/**
 * Fetch films by a person's ID
 * @param {number} personId - The ID of the person
 * @returns {Promise<any>} The list of films related to the person
 */
export async function fetchFilmsByPersonId(personId: number): Promise<any> {
  try {
    const response = await api.get(`/films/?characters__contains=${personId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching films:', error);
    throw new Error('Unable to fetch films');
  }
}
