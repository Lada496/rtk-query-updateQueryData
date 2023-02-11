import React from "react";
import CharacterItem from "./CharacterItem";
import { ModifiedCharacter } from "../api/starWars-types";

type CharacterListProps = {
  name: string;
  characters: ModifiedCharacter[];
};

const CharacterList = ({ name, characters }: CharacterListProps) => {
  return (
    <>
      <h1>{name}</h1>
      {characters.map((character) => (
        <CharacterItem key={character.id} character={character} />
      ))}
    </>
  );
};

export default CharacterList;
