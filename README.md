# RECIPE ORGANIZER APP
# Documentation on recipe organizer app
Creating a Recipe Book App Using HTML, CSS, and JavaScript 

# Table of Contents

~ Project Introduction

~ HTML Code

~ CSS Code

~ JavaScript Code

~ Preview

~ Conclusion

# Project Introduction

Cooking and coding, two seemingly distinct domains, can intertwine to create something truly captivating. In this comprehensive guide, we're about to embark on a journey where gastronomy meets technology. Together, we'll delve into the art of designing and developing a digital recipe book using HTML, CSS, and JavaScript, spiced up with the integration of a Food & Recipe API.

In the digital age, everything has gone online, recipes included. Think about it – no more flipping through worn-out cookbooks or deciphering handwritten recipe cards. Imagine a user-friendly digital recipe book that not only presents recipes with mouthwatering images but also allows for interactivity. That's exactly what we'll be building together.

# HTML Code

This HTML code represents the structure of a simple web page for a Recipe Book App. Here's a breakdown of each part:

1. Document Type Declaration (`<!DOCTYPE html>`):

    This declaration defines the document type and version of HTML being used. In this case, it's HTML5.

2. HTML Tag (`<html lang="en">`):

    Root element of the HTML document.

    `lang="en"` attribute specifies the language of the document as English.

    This tag indicates the beginning of the HTML document and specifies the language of the content, which is English in this case.

3. Head Section (`<head>`): 

    Contains metadata about the document.

    The head section of the document contains metadata about the webpage, like character encoding, title, stylesheets, and other resources. It doesn't display directly on the webpage.

    Meta tags (`<meta>`):

      `charset="UTF-8"` declares the character encoding of the document as UTF-8.  This sets the character encoding of the document to UTF-8, which supports a wide range of characters and symbols from different languages.

      `http-equiv="X-UA-Compatible"` provides instructions to Internet Explorer on which rendering engine to use. This meta tag tells Internet Explorer to use the latest rendering engine available.

      `name="viewport"` sets the viewport width to the device's width and initial zoom level to 1.  This meta tag ensures that the webpage is properly scaled and displayed on various devices, adapting to different screen sizes.
       

    Title (`<title>`): Specifies the title of the document. This sets the title of the webpage, which is typically displayed in the browser's title bar or tab.

    External CSS (`<link rel="stylesheet" href="styles.css" />`): Links an external CSS file named "styles.css" to style the HTML content. This links an external stylesheet named "styles.css" to the HTML document. Stylesheets are used to define the visual appearance of the webpage.

4. Body Section (`<body>`):

    The body section contains the visible content of the webpage.

    Header (`<header>`): Typically contains introductory content like a heading or logo. 

    Heading (`<h1>`): Displays the main heading of the application. This is a level 1 heading, indicating the main title of the webpage. It reads "Recipe Book App".

    Container (`<div class="container">`): Contains the main content of the application.  A `<div>` element with the class "container". It's often used to group and style content within a specific section.

    Unordered List (`<ul id="recipe-list" class="recipe-list">`): Displays the list of recipes, this is an unordered list (a bulleted list) with the ID "recipe-list" and the class "recipe-list". It will be used to display a list of recipes.

    External JavaScript (`<script src="script.js"></script>`): Links an external JavaScript file named "script.js" to provide dynamic functionality to the application. This is used to add interactivity and dynamic behavior to the webpage.

# CSS Code

This CSS code provides styling for a Recipe Book App, defining various aspects such as layout, colors, typography, and responsiveness.

~ Resetting Defaults (`body`)

Purpose: Resets default styles for the entire document body to ensure consistent rendering across different browsers and devices.

Properties:
        
   `margin: 0;`: Removes default margin to ensure elements are flush against the edges of the viewport.
        
   `padding: 0;`: Removes default padding to eliminate any unwanted spacing within elements.
        
   `font-family: Arial, sans-serif;`: Specifies a fallback font stack with Arial as the primary font family and generic sans-serif as a backup.

~ Header Styles (`header`)

Purpose: Defines styles for the header section of the web page.

Properties:

   `background: #0c2461;`: Sets the background color to a dark blue shade (#0c2461).
        
   `color: #fff;`: Sets the text color to white for better contrast against the dark background.

   `padding: 20px;`: Adds padding around the header content to create space between the text and the edges of the header.
    
   `text-align: center;`: Centers the text horizontally within the header.

~ Main Heading Styles (`h1`)

Purpose: Defines styles for the main heading of the application.

Properties:

   `margin: 0;`: Removes default margin to ensure the heading is flush against the header's edges.

   `font-size: 36px;`: Sets the font size to 36 pixels for emphasis and readability.

~ Container Styles (`container`)

Purpose: Defines styles for the container that holds the main content of the application.

Properties:

   `margin: 0 auto;`: Centers the container horizontally using automatic left and right margins.

   `max-width: 1200px;`: Sets the maximum width of the container to 1200 pixels to ensure content doesn't stretch too wide on larger screens.

   `padding: 20px;`: Adds padding around the container content to create space between the content and the edges of the container.

~ Recipe List Styles (`recipe-list`)

Purpose: Defines styles for the list of recipes displayed within the application.

Properties:

   `list-style: none;`: Removes default list styles (bullet points) from the recipe list.

   `margin: 0;`: Removes default margin to ensure the list items are flush against the edges of the container.

   `padding: 0;`: Removes default padding to eliminate any unwanted spacing within the list.

~ Recipe Item Styles (`recipe-item`)

Purpose: Defines styles for each individual recipe item within the list.

Properties:

   `display: flex;`: Uses flexbox for layout, allowing for easy alignment and spacing of elements within each recipe item.

   `align-items: center;`: Aligns items vertically within each recipe item.

   `justify-content: space-between;`: Distributes space evenly between elements horizontally within each recipe item.

   `margin-bottom: 20px;`: Adds spacing between recipe items to improve readability and visual separation.

   `box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);`: Adds a subtle box shadow effect to give a card-like appearance to each recipe item.

   `border-radius: 5px;`: Rounds the corners of each recipe item for a more polished look.

   `overflow: hidden;`: Hides any overflow content within the recipe item to prevent unwanted visual clutter.

~ Recipe Image Styles (`recipe-item img`)

Purpose: Defines styles for images displayed within each recipe item.

Properties:

   `width: 150px;`: Sets the width of the image to 150 pixels.

   `height: 150px;`: Sets the height of the image to 150 pixels.

   `object-fit: cover;`: Ensures the image covers the entire container, maintaining its aspect ratio without stretching.

~Recipe Title Styles (`recipe-item h2`)

Purpose: Defines styles for the titles of each recipe.

Properties:

   `margin: 0;`: Removes default margin to ensure the title is flush against the edges of its container.

   `font-size: 20px;`: Sets the font size of the title to 20 pixels.

   `padding: 10px;`: Adds padding around the title to create space between the text and the edges of its container.

   `min-width: 200px;`: Sets a minimum width for the title to ensure it remains readable and visually appealing.

~ Recipe Description Styles (`recipe-item p`)

Purpose: Defines styles for the descriptions of each recipe.

Properties:

   `margin: 0;`: Removes default margin to ensure the description is flush against the edges of its container.

   `padding: 10px;`: Adds padding around the description to create space between the text and the edges of its container.

   `color: #777;`: Sets the text color to a dark gray (#777) for better readability.

~ Recipe Link Styles (`recipe-item a`)

Purpose: Defines styles for the links associated with each recipe.

Properties:

   `background: #0c2461;`: Sets the background color of the links to a dark blue shade (#0c2461).

   `color: #fff;`: Sets the text color of the links to white for better contrast against the background.

   `min-width: 150px;`: Sets a minimum width for the links to ensure they remain clickable and visually distinct.

   `padding: 10px;`: Adds padding around the links to create space between the text and the edges of the links.

   `text-decoration: none;`: Removes the default underline decoration from the links.

   `text-transform: uppercase;`: Transforms the text of the links to uppercase for consistency and emphasis.

   `font-size: 14px;`: Sets the font size of the links to 14 pixels.

   `transition: background 0.3s ease;`: Adds a smooth transition effect to the background color of the links for a better user experience.

~ Hover Effect for Links (`recipe-item a:hover`)

Purpose: Defines styles for the hover effect of the links associated with each recipe.

Properties:

   `background: #1e3799;`: Sets a darker shade of blue (#1e3799) as the background color when the links are hovered over, providing visual feedback to the user.

~ Media Query for Responsive Design

Purpose: Adjusts the layout and styles for smaller screens using a media query.

Properties:

   `@media screen and (max-width: 768px) { ... }`: Targets screens with a maximum width of 768 pixels.

Adjustments include modifying the container width, changing the layout of recipe items to a column, and adjusting the sizes of images, titles, descriptions, and links to ensure optimal display on smaller devices.

# Javascript Code 

This JavaScript code is responsible for fetching random recipes from the Spoonacular API, displaying them on the webpage, and initializing the application.

~ Constants

API_KEY: Stores the API key required for accessing the Spoonacular API.

~ Variables

recipeListEl: Holds a reference to the HTML element where the list of recipes will be displayed.

~ Functions

`displayRecipes(recipes)`

Purpose: Renders recipes on the webpage by creating HTML elements dynamically for each recipe.

Parameters:



