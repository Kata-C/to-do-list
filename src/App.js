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
    if(item) setList([...list, item]);
  }

  const deleteItem = (index) => {
    setList(list.filter((item, itemIndex)=> itemIndex !== index));
  }
  

  const setSearchQuery = (query) => {
    setQuery(query);
  }

  return (
    <div className="App">
      <SearchBar list={list} addItem={addItem}/>
      <div className='item-list'>
        {
          list.map((item, index) => {
            return <div className='item-list-element'> 
              <li key={index}> {item} </li>
              <button className='button-delete' onClick={() => deleteItem(index)} src>
                <img src='done.png' width='50%'/>
              </button>
            </div>
          })
        }
      </div>
      
    </div>
  );
}

export default App;
