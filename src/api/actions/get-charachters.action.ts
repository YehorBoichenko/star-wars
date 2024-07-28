
// 'use server';

// import api from '@/api/api';
// import { CharacterType } from '@/types/charachter';

// export async function getCharacters(pageNumber: number): Promise<{
//   next: any; results: CharacterType[] 
// }> {
//   try {
//     const response = await api.get(`/people/?page=${pageNumber}`);
    

//     const results = response.data.results.map((character: any) => {

//       const id = parseInt(character.url.split('/')[5], 10);
//       return { ...character, id };
//     });

//     return { ...response.data, results }; 

//   } catch (error) {
//     throw error; 
//   }
// }
'use server';
import { CharacterResponse } from "@/types/charachter"
import api from "@/api/api";

export async function getCharacters(page: number): Promise<CharacterResponse> {
  try {
    return (await api.get(`people/?page=${page}`)).data
  } catch (error) {
    throw error
  }
}