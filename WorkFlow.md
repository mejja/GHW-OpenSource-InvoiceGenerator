<!--How to implement this project  -->
1. Go replit and sign in or signup if don't have account yet before sign in
2. go to templates and select reactjs template.
3. Move react and react-dom from Dependancies to depandancies
4. After your template finish creating go to template folder and delete unnedded dev dependencies and leave only the below dependancies.
   -  "@vitejs/plugin-react
   -  vite
5. if you get a vulnerability error in one of the dependancies, just delete them in json file and reinstall them with below command
npm install -D vite
6. Tailwind Installation
7. go Tailwind site and follow installation instructions for vite.
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p

   #configure template path
  Copy the below to the tailwind.config.js file
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
     ],

   #Adding the Tailwind directives to your css
   Delete everything in app.css and paste below code
   @tailwind base;
   @tailwind components;
   @tailwind utilities;

8. Install Daisyui
   #install dependancy
   npm i -D daisyui@latest

   #Add daisyUI to your tailwind.config.js files
   module.exports = {
     //...
     plugins: [require("daisyui")],
   }
9. Create features directory inside src directory
    Then add the two files and declare components inside
   - InvoiceDetailsPage.jsx
   - InvoiceInfoHeader.jsx
 