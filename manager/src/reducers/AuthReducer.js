import * as actionType from '../actions/types';

const INITIAL_STATE= {email:'',password:'',user:null,error:'',loading:false};


export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case actionType.EMAIL_CHANGED:
            return {...state,email:action.payload};


        case actionType.PASSWORD_CHANGED:
            return {...state,password:action.payload}


        case actionType.LOGIN_USER:
            return {...state,loading:true,error:''}
        case actionType.LOGIN_USER_SUCCESS:
            return {...state, ...INITIAL_STATE,loading:false,}

        case actionType.LOGIN_USER_FAIL:
            return {...state,error:"Authentication Failed.",loading:false,}

        default:
            return state; 
        
    }
}