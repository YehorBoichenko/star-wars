'use server';
import { CharacterType } from '@/types/character';
import api from '@/api/api';

/**
 * Fetches a character by ID from the API.
 * @param id - The ID of the character to fetch.
 * @returns A promise that resolves to the character data.
 * @throws An error if the API request fails.
 */
export async function getCharacterById(id: string): Promise<CharacterType> {
  try {
    const response = await api.get(`people/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch character with ID ${id}: ${error}`);
  }
}
