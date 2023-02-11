import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  RowCharacter,
  CategorizedCharacters,
  ModifiedCharacter
} from "./starWars-types";
import { modifyRowCharacters, categorizeCharacters } from "./starWars-utils";

export const starWarsApi = createApi({
  reducerPath: "starWarsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://akabab.github.io/starwars-api/api/"
  }),
  endpoints: (builder) => ({
    getCharacters: builder.query<CategorizedCharacters, undefined>({
      query: () => "all.json",
      transformResponse: (response: RowCharacter[]): CategorizedCharacters => {
        if (response.length === 0) return {};
        const modifiedCharacters = modifyRowCharacters(response);
        const categorizedCharacters = categorizeCharacters(modifiedCharacters);
        return { all: modifiedCharacters, ...categorizedCharacters };
      }
    })
  })
});

export const updateCharacter = (characters: ModifiedCharacter[]) =>
  starWarsApi.util.updateQueryData(
    "getCharacters",
    undefined,
    (draftPosts) => ({
      new: characters,
      ...draftPosts
    })
  );
export const { useGetCharactersQuery } = starWarsApi;
