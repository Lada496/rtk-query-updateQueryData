import { isEmpty } from "lodash";
import { useAppDispatch } from "./store";
import { useGetCharactersQuery, updateCharacter } from "./api/starWars-api";

import CharacterList from "./components/CharacterList";

import "./styles.css";

export default function App() {
  const dispatch = useAppDispatch();
  const { data, error, isLoading } = useGetCharactersQuery(undefined);
  if (isLoading) return <div>Loading</div>;
  if (error) return <div>Error</div>;
  if (!data || isEmpty(data)) return <div>No data found</div>;

  const { all, ...charactersBySpecies } = data;
  const handleClick = () =>
    dispatch(
      updateCharacter([
        {
          id: 0,
          name: "name",
          image: "image",
          gender: "gender",
          species: "speceis"
        }
      ])
    );

  return (
    <div className="App">
      <button onClick={handleClick}>click</button>
      {Object.keys(charactersBySpecies).map((key) => (
        <CharacterList
          key={key}
          name={key}
          characters={charactersBySpecies[key]}
        />
      ))}
    </div>
  );
}
