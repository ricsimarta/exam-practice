import Character from "./Character";

export default function Characters({ charactersData, filterText }) {
  return (
    <div className="characters">
      {charactersData.filter(characterData => characterData.name.toLowerCase().includes(filterText.toLowerCase())).map((characterData, index) => 
        <Character
          key={index}
          name={characterData.name}
          height={characterData.height}
          mass={characterData.mass}
          films={characterData.films}
        />
      )}
    </div>
  )
}