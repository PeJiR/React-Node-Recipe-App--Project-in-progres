export const searchRecipes = async (searchTerm: string, page: Number) => {
    const baseUrl = new URL("http://localhost:5000/api/recipes/search");
    baseUrl.searchParams.append("searchTerm", searchTerm)
    baseUrl.searchParams.append("page", String(page))

    const response = await fetch(baseUrl)
    if (!response.ok) {
        throw new Error(`HTPP error! Status: ${response.status}`)
    }
    return response.json();
}