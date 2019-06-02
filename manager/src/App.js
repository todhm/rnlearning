import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import LoginForm from './components/LoginForm';
import Router from './Router';


class App  extends Component{

    componentWillMount(){
        var firebaseConfig = {
            apiKey: "AIzaSyAh4nOrSQ-1je3bfhe6nXPhJv8m0BWkEso",
            authDomain: "manager-c1e18.firebaseapp.com",
            databaseURL: "https://manager-c1e18.firebaseio.com",
            projectId: "manager-c1e18",
            storageBucket: "manager-c1e18.appspot.com",
            messagingSenderId: "913352004481",
            appId: "1:913352004481:web:2cd4d9128a57d6af"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
        
    }

    render(){
        const store = createStore(reducers,{},applyMiddleware(ReduxThunk));
        return(
            <Provider store={store}>
                <Router/>
            </Provider>
        )
    }
}


export default App;