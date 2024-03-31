import './App.css';
import { useState } from 'react';
import * as api from './api';

const App = ()=>{
  const [searchTerm, setSearchTerm]= useState("burgers");
  const [recipes, setRecipes] = useState([])
  const handleSearchSubmit = async()=>{
    try {
      const recipes = await api.searchRecipes(searchTerm, 1)
      
      
    } catch (error) {
      console.log(error);
      
    }
  }

  return<div> Hello from recipe App!</div>
};

export default App;
