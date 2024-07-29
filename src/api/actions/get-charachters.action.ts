'use server';

import { CharacterResponse } from '@/types/character';
import api from '@/api/api';

/**
 * Fetches a list of characters from the API.
 *
 * @param page - The page number to fetch characters from.
 * @returns A promise that resolves to the `CharacterResponse` containing the list of characters.
 * @throws Will throw an error if the API request fails.
 */
export async function getCharacters(page: number): Promise<CharacterResponse> {
  try {
    const response = await api.get(`people/?page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch characters:', error);
    throw error;
  }
}
