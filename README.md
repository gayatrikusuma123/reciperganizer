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




