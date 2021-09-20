## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Steps I would follow IF I could make the react leaflet work as expected

1. Create interfaces for the types I expect to get back from fetching
2. Create all the needed buttons/components with the corresponding actions (onClick method to dispatch the action), to apply the filters needed.
3. Create a new Component to represent the data I want to see when clicking on the map (with the proper types)
4. For the state management and for all the filterings, I would go with a reducer function, and the corresponding action.types / payloads.
5. Write tests to cover the main scenarios
6. Clean up: Destructuring where possible, modularize etc.

## this project has no types, interfaces etc, because it was the 4th proejct generated, to check If I was doing something wrong with the react leaflet, thats why it only has a simple fetch and no other code, cause all of my time was wasted trying to make the leaflet work..
