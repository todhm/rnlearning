import * as actionType from './types';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';


export const emailChanged=(text)=>{
    return{
        type:actionType.EMAIL_CHANGED,
        payload:text,
    }
}


export const passwordChanged=(text)=>{
    return {
        type:actionType.PASSWORD_CHANGED,
        payload:text,
    }
}


export const loginUser=({email,password})=>{
    return (dispatch)=>{
        dispatch({type:actionType.LOGIN_USER});
        firebase.auth().signInWithEmailAndPassword(email,password).then(user=>loginUserSuccess(dispatch,user))
        .catch((error)=>{
            console.log(error)
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(user=>loginUserSuccess(dispatch,user))
            .catch(()=>loginUserFail(dispatch))
        });
    }
}



const loginUserSuccess=(dispatch,user)=>{
    dispatch({
        type:actionType.LOGIN_USER_SUCCESS,
        payload:user
    })
    Actions.employeeList();
}

const loginUserFail=(dispatch)=>{
    dispatch({type:actionType.LOGIN_USER_FAIL});
}