export default (state=null,action)=>{


    switch(action.type){

        case 'select_library':
            return (state===action.payload )?null:action.payload;


        default: 
            return state;
    }

};