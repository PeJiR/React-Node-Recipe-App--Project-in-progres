import { URLSearchParams } from "url";

//initiate a constant to store your API key from the environment variables:
const API_KEY = process.env.API_KEY;

//Create the searchRecipes Function

export const searchRecipes = async (searchTerm:string, page:number) =>{
    if(!API_KEY){
        throw new Error ("API key not found");
    }
    const baseUrl = "https://api.spoonacular.com/recipes/complexSearch";
    const url = new URL (baseUrl);

    const queryParams = {
        apiKey: API_KEY,
        query: searchTerm,
        number: 10,
        offset: (page- 1)*10,
    };

    url.search = new URLSearchParams(queryParams).toString();

    try {
        const searchResponse = await fetch(url.toString());
        const resultsJson = await searchResponse.json();
        return resultsJson;
        
    } catch (error) {
        console.error(error);
        
    }


}