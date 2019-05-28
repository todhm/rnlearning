// Import a library to help create a component 
import React from 'react';
import {AppRegistry,View} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

const App = () => (   
    <View style={{flex:1}}>
        <Header headerText={"Albums"}/>
        <AlbumList/>
    </View>

);
    
AppRegistry.registerComponent('albums', () => App);

// Create a component 


//Render it to the device 