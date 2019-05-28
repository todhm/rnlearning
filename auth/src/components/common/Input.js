import React from 'react';
import {TextInput,View,Text} from 'react-native';


const Input = ({label,value,onChangeText})=>{

    return(
        <View>
            <Text>{label}</Text>
            <TextInput
            value={value}
            style={{height:20,width:20}}
            onChangeText={onChangeText}
            />
        </View>
    )

}
export {Input};