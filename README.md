# appointment-booking-system
Appointment booking system developed in React JS, Redux and API integration.

## Implementation designs
<img src="src\assets\AppointoAppDesign.svg"/>

## Set up the project

### `npm i`

### `npm start`

## Available Scripts

In the project directory, you can run:

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

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### File structure

├───public/
│   ├───favicon.ico
│   ├───index.html
│   ├───logo192.png
│   ├───logo512.png
│   ├───manifest.json
│   └───robots.txt
├───src/
│   ├───action/
│   │   └───slotActions.js      
│   ├───actionTypes/
│   │   └───actionTypes.js      
│   ├───API/
│   │   └───getTimeSlots.js     
│   ├───assets/
│   │   ├───bottomLeft.svg      
│   │   ├───bottomLeftStripe.svg
│   │   ├───bottomRight.svg     
│   │   ├───calendar.svg        
│   │   ├───circle-check.svg    
│   │   ├───downArrow.svg       
│   │   ├───shareIcon.svg       
│   │   └───topGreen.svg        
│   ├───components/
│   │   ├───CalendarComponent.js
│   │   ├───ConfirmationModal.js
│   │   ├───headers.js
│   │   └───LoadingComponent.js 
│   ├───reducers/
│   │   └───selectTimeSlotReducer.js
│   ├───styles/
│   │   ├───Calendar.css
│   │   ├───ConfirmationModal.css
│   │   ├───headers.css
│   │   └───LoadingComponent.css
│   ├───utils/
│   │   └───helper.js
│   ├───App.js
│   ├───index.css
│   ├───index.js
│   └───store.js
├───.gitignore
├───LICENSE
├───package-lock.json
├───package.json
└───README.md