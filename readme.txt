# Inspirational Quote Generator

This is a beautifully designed web application that uses the Google Gemini API to generate inspirational quotes on demand.

## How to Run This Website

**This application is designed to run directly in the browser without any installation or build commands.**

This project does not use Node.js, npm, or a traditional build process. It relies on modern browser features (ES Modules and `importmap`) to load libraries like React and Tailwind CSS directly from a Content Delivery Network (CDN).

The development environment you are using automatically compiles the TypeScript (TSX) code and serves the files, so you can see your changes live.

### Step 1: Configure Your API Key

This application requires a Google Gemini API key to function.

1.  You must have your API key set as an environment variable or secret named `API_KEY`.
2.  The application code in `services/geminiService.ts` will automatically use this key.
3.  **If the `API_KEY` is not configured correctly, the application will show an error message and will not be able to generate quotes.**

### Step 2: View the Application

Once the API key is set, the application should already be running in the preview window of your development environment. There are no further steps or commands needed.

## How it Works

-   **`index.html`**: This is the main file. It includes a special `<script type="importmap">` tag that tells the browser where to find the React and `@google/genai` libraries online. It also loads the main application script, `index.tsx`.
-   **`index.tsx`**: This file finds the `<div id="root">` element in the HTML and tells React to render the main `App` component inside it.
-   **React Components (`/components`)**: The user interface is built with React components, which are reusable pieces of code.
-   **Gemini Service (`/services`)**: The `geminiService.ts` file contains the logic for communicating with the Google Gemini API to fetch a new quote.

## Technology Stack

-   **React 19**: A JavaScript library for building user interfaces.
-   **Tailwind CSS**: A utility-first CSS framework for styling (loaded from a CDN).
-   **Google Gemini API**: Used for generating the quote content.
-   **TypeScript**: Adds static typing to JavaScript for improved code quality.
