import { useEffect, useState } from "react";
import Characters from "./components/Characters";
import Loading from "./components/Loading";
import { Button, TextField } from "@mui/material";

function App() {
  const [charactersData, setCharactersData] = useState(null);
  const [sortBy, setSortBy] = useState("asc");
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then(res => res.json())
      .then(data => setCharactersData(data.results))
  }, [])

  const handleSort = () => {
    if (sortBy === "asc") {
      setCharactersData([...charactersData].sort((a, b) => a.name.localeCompare(b.name))); 
      setSortBy("desc");
    } else {
      setCharactersData([...charactersData].sort((a, b) => b.name.localeCompare(a.name)));
      setSortBy("asc");
    }
  }

  return (
    <div className="App">
      {charactersData 
        ? 
          <>
            <Button 
              variant="outlined" 
              onClick={handleSort}
            >sort by abc</Button>
            
            <TextField 
              id="filter-text" 
              label="filter" 
              variant="outlined" 
              value={filterText} 
              onChange={event => setFilterText(event.target.value)} 
            />
            <Characters charactersData={charactersData} filterText={filterText} /> 
          </>
        : 
          <Loading />
      }
    </div>
  );
}

export default App;
