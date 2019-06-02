import React,{Component} from 'react';
import {Text} from 'react-native';
import {Button,Card,CardSection,Input,Spinner} from './common';
import firebase from 'firebase';

class LoginForm extends Component{

    state={email:'',password:'',error:'',loading:false};


    onButtonPress(){
        const {email,password} = this.state; 
        this.setState({error:'',loading:true});
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(this.onLoginSuccess)
        .catch(()=>{
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(this.onLoginSuccess)
            .catch(this.onLoginFail);
        })
    }

    onLoginSuccess=()=>{
        this.setState({
            email:'',
            password:'',
            loading:false,
            error:'',
        })
    }

    onLoginFail=()=>{
        this.setState({error:'Authentication Failed',loading:false})

    }


    renderButton=()=>{
        if(this.state.loading){
            return <Spinner size="small"/>;
        }else{
            return(
                <Button onPress={this.onButtonPress.bind(this)}>
                    Login
                </Button>
            )
        }
        
    }


    render(){
        return(
            <Card>
                <CardSection>
                    <Input 
                    label="Email"
                    value={this.state.email}
                    placeholder="user@gmail.com"
                    onChangeText={email=>this.setState({email})}
                    />
                </CardSection>
                <CardSection>
                    <Input
                    secureTextEntry
                    label="Password"
                    placeholder="password"
                    value={this.state.password}
                    onChangeText={password=>this.setState({password})}
                    />
                </CardSection>
                <Text style={style.errorTextStyle}>
                    {this.state.error}
                </Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }

}

const style={
    errorTextStyle:{
        fontSize:20,
        alignSelf:'center',
        color:'red',

    }
}


export default LoginForm;