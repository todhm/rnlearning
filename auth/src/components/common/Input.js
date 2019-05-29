import React from 'react';
import {TextInput,View,Text} from 'react-native';


const Input = ({label,value,onChangeText})=>{
    const {inputStyle,labelStyle,containerStyle} = styles;

    return(
        <View style={containerStyle}>
            <Text stye={labelStyle}>{label}</Text>
            <TextInput
            style={inputStyle}
            value={value}
            onChangeText={onChangeText}
            />
        </View>
    )

}

const styles={
    inputStyle:{
        color:"#000",
        paddingRight:5,
        paddingLeft:5,
        fontSize:18,
        lineHeight:23, 
        flex:2/3,
        paddingTop:0,
        paddingBottom:0,
    },
    labelStyle:{
        fontSize:18, 
        paddingLeft:20, 
        flex:1/3,
    },
    containerStyle:{
        height:40,
        flex:1,
        flexDirection: 'row', 
        alignItems:'center',
    }
}

export {Input};
