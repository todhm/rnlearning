// Import a library to help create a component 
import React from 'react';
import {AppRegistry} from 'react-native';
import Header from './src/components/header';


const App = () => (   
    <Header/>

);
    
AppRegistry.registerComponent('albums', () => App);

// Create a component 


//Render it to the device 