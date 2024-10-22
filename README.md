# Personal Portfolio Website in React

Project is live at https://awakemanish.github.io/Portfolio/
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Built using:

- Front-end library: React
- CSS framework: React-bootstrap
- CSS animations library: Animate.css

In the /personal-portfolio, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### Deployment

Step 1: Install gh-pages
npm install gh-pages --save-dev

Step 2: Update package.json

Add a homepage field: In your package.json, add a homepage field that specifies your GitHub Pages URL:
"homepage": "https://<username>.github.io/<repository-name>"

Add deployment scripts: Also, add the following scripts in the scripts section of your package.json:
"scripts": {
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
}
Step 3: Commit Changes
git add .
git commit -m "Add gh-pages deployment"

Step 4: Deploy Your App
npm run deploy

Step 5: Access Your Deployed App
https://<username>.github.io/<repository-name>
