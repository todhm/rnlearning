//Import libraries for making a component 
import React from 'react';
import {Text,View} from 'react-native';
// Make a component 

// Make the component available to other parts of the app 

const Header = () => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>Albums!</Text>
        </View>
    );
};

const styles = {
    viewStyle:{
        backgroundColor: '#F8F8F8',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:40,
        shadowColor:'#000',
        shadowOffset:{width:0,height:5},
        height:90,
        shadowOpacity:0.2,
    },
    textStyle:{
        fontSize:20,   
    }
};

export default Header;

