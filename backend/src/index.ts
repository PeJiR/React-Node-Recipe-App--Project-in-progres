import express from 'express';
import cors from 'cors';
import * as RecipeAPI from './recipe-api';
import "dotenv/config"; 

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/recipe/search", async (req,res)=> {
    const searchTerm =  req.query.searchTerm as string;
    const page = parseInt(req.query.page as string);
    const results = await RecipeAPI.searchRecipes(searchTerm, page);
    return res.json(results);
});

app.listen(5000, ()=>{
    console.log ("server running on localhost:5000")
});
