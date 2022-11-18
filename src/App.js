import logo from './logo.svg';
import './App.scss';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

function App() {
  const [list, setList] = useState([]);
  const [listActive, setListActive] = useState([]);
  const [listComplete, setListComplete] = useState([]);
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
      <div className='container'>

        <h2>Things to do</h2>
        <SearchBar list={list} addItem={addItem}/>
        <Footer />
        <div className='item-list'>
          {
            list.map((item, index) => {
              return <div className='item-list-element'> 
                <li key={index}> {item} </li>
                <button className='button-delete' onClick={() => deleteItem(index)} src>
                  {/* <img src='done.png' width='50%'/> */}
                  Eliminar
                </button>
              </div>
            })
          }
        </div>
        

      </div>
      
    </div>
  );
}

export default App;
