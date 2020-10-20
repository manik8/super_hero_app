import React, {useState} from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

function App() {
  const [searchText, setSearchText] = useState('')
  const [superheroData, setSuperheroData] = useState([]);

    async function searchSuperHeroes() {
        const response = await fetch(`https://www.superheroapi.com/api.php/3475512422527760/search/${searchText}`);
        const data = await response.json();
        setSuperheroData(data.results);
    }
    function handleChange(e) {
        const searchItem = e.target.value;
        setSearchText(searchItem);
        
        if(searchItem.length === 0 ){
          setSuperheroData([]);
        }
        if(searchItem.length > 3) {
            searchSuperHeroes();
        }
    }
  return (
    <div className="App">
    <Navbar />
    <div className="main">
    <SearchBar searchText={searchText} handleChange={handleChange} />
    <SearchResults superheroData={superheroData}/>
    </div>
    </div>
  );
}

export default App;
