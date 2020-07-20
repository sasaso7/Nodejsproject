

This project contains a small Node web server and small React Native app.

These two projects illustrate the technology I want to work with.

Both web server and mobile app uses the [TypeScript language](https://www.typescriptlang.org).

## Prerequisites

- [Node.js](https://nodejs.org/en/)

## Backend

The backend is implemented with Node + Express. It uses a plain JSON file as a mock database.

To run the backend first install required packages:

`npm install`

and when finished run server:

`npm start`

Keywords:

- NodeJS
- TypeScript
- Express

## Mobile

The mobile app is developed using the React Native framework through Expo.

To start the Expo Developer Tool first install requirements:

`npm install`

Then afterwards run `npm start`. This will open a web site showing debug information.

The easiest way to run the app is to download the Expo app on your phone and scan the QR code shown in the Developer Tools:



Otherwise the app can be run in a browser window or through an Android Emulator. See link below for more information.


#### Technologies

The mobile app is created with the following technologies:

- React Native
- Expo
- React Navigation
- TypeScript

#### Network

The app will connect to the running `sandbox-backend` and fetch some images and their meta data. This means that:

- The backend must be running for the mobile app to function properly.

- The device running Expo + the app need to be on the same LAN network. This is no issue when using the web or an Android Emulator.

#### Screens

The routes in the app are broken down into a Tab Navigator at the bottom with three tabs. Two of these tabs have a Stack Navigator with two screens each. See illustration below:



The app consists of 5 screens:

- *Home Screen* with infinite animation

- Image stack with two screens
  
  - *Images Screen* - fetches and shows a list of images from the backend
  
  - *Image Details* - show selected image large and shows description

- Document stack:
  
  - *Documents Screen* - fetches and shows a list of images from the backend
  
  - *Documents Details* - show selected document large and opens the document.
