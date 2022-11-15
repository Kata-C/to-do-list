import logo from './logo.svg';
import './App.scss';
import SearchBar from './components/SearchBar'
import { useEffect, useState } from 'react';

function App() {
  const [list, setList] = useState([]);
  const [query, setQuery] = useState(null);

  useEffect(() => {
    addItem.bind(this);
    setSearchQuery.bind(this);
  }, []);

  const addItem = (item) => {
    setList([...list, item]);
    console.log('Lista: ' + list)
  }

  const setSearchQuery = (query) => {
    setQuery(query);
  }

  const searchResults = () => {
    let results = [];
    list.forEach(item => {

      if(item === query) {
        results =  [...results, item];
      } else {
        let words = item.split(' ');
        words.forEach(word => {
          let queryWords = query.split(' ');
          queryWords.forEach();

          
          if(item[word.index] === query) {
            results =  [...results, item];
          }
        })
      }
      
    });
    console.log(results);
    return results;
  }

  return (
    <div className="App">
      <SearchBar list={list} addItem={addItem} setSearchQuery = {setSearchQuery}/>
      <div className='item-list'>
        {
          query ? 
          searchResults().map(item => <li> {item} </li>)
          :
          list.map(item => <li> {item} </li>)
        }
      </div>
      
    </div>
  );
}

export default App;
