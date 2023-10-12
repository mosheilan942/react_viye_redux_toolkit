React Redux Toolkit Demo

This project demonstrates using React Redux Toolkit to manage application state.


Overview
React components located in src/components
Redux logic located in src/app
animalSlice.ts contains the animal reducer and actions
store.ts configures the Redux store
App.tsx renders the main Provider
State Management
Application state is kept in the Redux store
The animalSlice slice manages state of the selected animal
Components dispatch Redux actions to update state
Selectors allow components to extract state
Components
Buttons - Renders buttons to select animals
MyButton - Button component for each animal
Display - Shows currently selected animal
Another - Text input to add custom animal
Redux Logic
selectAnimal action sets the selected animal
Reducer listens for this action and updates state
useAppSelector hook allows components to access updated state
Running the Project
Clone the repo
Run npm install
Run npm run dev
App will start on localhost:3000
Next Steps
Connect more components to Redux
Add animations and styles
Fetch animal data from API
Add routing
Write tests for components and redux logic
