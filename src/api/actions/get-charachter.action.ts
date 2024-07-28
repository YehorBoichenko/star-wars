// 'use server';

// import api from '@/api/api';

// /**
//  * Fetches a charachter by ID
//  * @param {number} id - The ID of the charachter
//  * @returns {Promise<any>} The data of the charachter
//  */

// export async function getCharacter (id: number): Promise<any> {
//   const response = await api.get(`/people/${id}`);

  
//   return response.data;

// }
'use server';
import {  CharacterType } from "@/types/charachter"
import api from "@/api/api";

export async function getCharacterById(id: string): Promise<CharacterType> {

  
  try {
    return (await api.get(`people/${id}`)).data
  } catch (error) {
    throw error
  }
}