import {ADD_TO_CART,REMOVE_FROM_CART, SET_USER_DATA} from './constants';
const initialState=[];
export const reducer=(state=initialState,action)=>
{
    switch (action.type) {
        case ADD_TO_CART:
                return[
                    ...state,
                    action.data
                ]
            break;
        case REMOVE_FROM_CART:
                let result =state.filter(item=>{
                    return item.name!=action.data
                })
                return [...result]
            break;
            case SET_USER_DATA:
 
               return [
                    
                //this is cart data 
                action.data
                 //on which the action performed, wala data
                //now get the data into the userlist components
             ]
            break;
        default:
            return state
            break;
    }

}