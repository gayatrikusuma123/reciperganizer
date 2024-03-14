// Define the API key used for accessing Spoonacular API
const API_KEY = "92f0263949a74da9877e2fb48b92fbf9";

// Get the reference to the element where the recipe list will be displayed
const recipeListEl = document.getElementById("recipe-list");

// Function to display recipes on the webpage
function displayRecipes(recipes) {
    // Clear existing content in the recipe list element
    recipeListEl.innerHTML = "";

    // Iterate through each recipe received from the API
    recipes.forEach((recipe) => {
        // Create a list item element for each recipe
        const recipeItemEl = document.createElement("li");
        // Add class "recipe-item" to the list item element
        recipeItemEl.classList.add("recipe-item");

        // Create an image element for the recipe thumbnail
        const recipeImageEl = document.createElement("img");
        // Set the image source to the recipe's image URL
        recipeImageEl.src = recipe.image;
        // Set alt text for the image
        recipeImageEl.alt = "recipe image";

        // Create a heading element for the recipe title
        const recipeTitleEl = document.createElement("h2");
        // Set the text content of the title element to the recipe's title
        recipeTitleEl.innerText = recipe.title;

        // Create a paragraph element for displaying recipe ingredients
        const recipeIngredientsEl = document.createElement("p");
        // Set the inner HTML of the paragraph to display the list of ingredients
        recipeIngredientsEl.innerHTML = `
            <strong>Ingredients:</strong> ${recipe.extendedIngredients
              .map((ingredient) => ingredient.original)
              .join(", ")}
        `;

        // Create a link element for viewing the full recipe
        const recipeLinkEl = document.createElement("a");
        // Set the href attribute to the source URL of the recipe
        recipeLinkEl.href = recipe.sourceUrl;
        // Set the text content of the link
        recipeLinkEl.innerText = "View Recipe";

        // Append the image, title, ingredients, and link elements to the recipe item
        recipeItemEl.appendChild(recipeImageEl);
        recipeItemEl.appendChild(recipeTitleEl);
        recipeItemEl.appendChild(recipeIngredientsEl);
        recipeItemEl.appendChild(recipeLinkEl);

        // Append the recipe item to the recipe list element
        recipeListEl.appendChild(recipeItemEl);
    });
}

// Function to fetch recipes from the Spoonacular API
async function getRecipes() {
    // Send a request to the Spoonacular API to retrieve random recipes (number=6)
    const response = await fetch(
        `https://api.spoonacular.com/recipes/random?number=6&apiKey=${API_KEY}`
    );

    // Parse the JSON response received from the API
    const data = await response.json();

    // Extract the array of recipes from the API response data
    return data.recipes;
}

// Function to initialize the webpage by fetching and displaying recipes
async function init() {
    // Fetch recipes from the Spoonacular API
    const recipes = await getRecipes();
    // Display the fetched recipes on the webpage
    displayRecipes(recipes);
}

// Call the init function to initialize the webpage when the script is executed
init();
