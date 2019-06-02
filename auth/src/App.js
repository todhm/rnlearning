import React,{Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header,Button,Spinner} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component{
    state={loggedIn:null}

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
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({loggedIn:true});
            }else{
                this.setState({loggedIn:false})
            }
        })
    }

    renderContent=()=>{
        switch(this.state.loggedIn){
            case true:
                return <Button onPress={()=>firebase.auth().signOut()}>Log Out</Button> 
            case false:
                return <LoginForm/>
            default:
                return <Spinner size="large"/>;
        }
    }
     
    render(){
        return(
            <View>
                <Header headerText="Authentication"/>
                {this.renderContent()}
            </View>
        )
    }
}
export default App;