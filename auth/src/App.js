import React,{Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component{

    componentWillMount(){
        var config = {
            apiKey: "AIzaSyArhkCZkyEOue-DH0aEYgZpZL4RjTxYCls",
            authDomain: "authentication-4d3ba.firebaseapp.com",
            databaseURL: "https://authentication-4d3ba.firebaseio.com",
            projectId: "authentication-4d3ba",
            storageBucket: "authentication-4d3ba.appspot.com",
            messagingSenderId: "218438640774",
            appId: "1:218438640774:web:fea86311abfe9f5f"
          };
          firebase.initializeApp(config);
    }
    render(){
        return(
            <View>
                <Header headerText="Authentication"/>
                <LoginForm/>
            </View>
        )
    }
}
export default App;