import React from "react";

import { ModifiedCharacter } from "../api/starWars-types";

type CharacterListProps = {
  character: ModifiedCharacter;
};

const CharacterItem = ({ character }: CharacterListProps) => {
  return (
    <>
      <h2>{character.name}</h2>
      <ul>
        <li>{character.gender}</li>
        <li>{character.species}</li>
      </ul>
    </>
  );
};

export default CharacterItem;
