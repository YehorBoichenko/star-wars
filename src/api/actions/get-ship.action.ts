'use server';

import api from '@/api/api';
import type { ShipType } from '@/types/starship';

/**
 * Fetches starships by their IDs.
 * @param {string[]} ids - An array of starship IDs.
 * @returns {Promise<{ data: ShipType[] }>} A promise that resolves with an object containing an array of starships.
 */
export async function fetchStarshipsByIds(ids: string[]): Promise<{ data: ShipType[] }> {
  const idsQueryString = ids.join(',');
  const requestUrl = `/starships/?id__in=${idsQueryString}`;

  try {
    const response = await api.get(requestUrl);
    const { data } = response;

    const starships: ShipType[] = data.results;

    return { data: starships };
  } catch (error) {
    console.error('Error fetching starships:', error);
    // Handle errors appropriately (e.g., throw an error or return an empty array)
    return { data: [] };
  }
}
