//Setup Your Backend Code

import express from "express";
import cors from "cors";
import * as recipeAPI from './recipe-api'

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/recipe/search", async (req, res) => {
  //Get http://localhost/api/recipes/search?searchTerm=burguers&page=1
  const searchTerm =req.query.searchTerm as string;
  const page =parseInt(req.query.page as string);
  const results = recipeAPI.searchRecipes(searchTerm, page);
});

app.listen(5000, () => {
  console.log("Server running on localhost:5000");
});







