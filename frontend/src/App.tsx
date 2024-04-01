import { FormEvent, useState } from "react";
import "./App.css";
import * as api from './api';
import { Recipe } from "./types";

// Create a Handler Function
const App = () => {
  const [searchTerm, setSearchTerm] = useState("burgers");
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const handleSearchSubmit = async (event:FormEvent) => {
    event.preventDefault();
    try {
      const recipes = await api.searchRecipes(searchTerm, 1);
      setRecipes(recipes.results);

    } catch(e) {
      console.log(e);

    }
  };
  return(
  <div>
    <form onSubmit={(event) => handleSearchSubmit(event)}>
      <button type="submit">Submit</button>
    </form>


    {recipes.map((recipe) => (
      <div>
        recipe image locaton: {recipe.image}
        recipe title: {recipe.title}
      </div>
    ))}


  </div>


)};

export default App;
