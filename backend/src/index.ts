<<<<<<< Updated upstream
//Setup Your Backend Code

import express from "express";
import cors from "cors";
import * as RecipeAPI from './recipe-api'
import * as searchRecipes from "./searchRecipes";
=======
import express from "express";
import cors from "cors";
>>>>>>> Stashed changes

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/recipe/search", async (req, res) => {
<<<<<<< Updated upstream
  //Get http://localhost/api/recipes/search?searchTerm=burguers&page=1
  const searchTerm =req.query.searchTerm as string;
  const page =parseInt(req.query.page as string);
  const results = await searchRecipes.searchRecipes(searchTerm, page);

  return res.json(results);
=======
  res.json({ message: "success" });
>>>>>>> Stashed changes
});

app.listen(5000, () => {
  console.log("Server running on localhost:5000");
});
<<<<<<< Updated upstream







=======
>>>>>>> Stashed changes
