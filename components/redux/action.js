import {ADD_TO_CART,REMOVE_FROM_CART,USER_LIST} from './constants'

export function AddToCart(item)
{
    return{
        type : ADD_TO_CART,
        data:item
    }
}
export function RemoveFromCart(item)
{
    return{
        type : REMOVE_FROM_CART,
        data:item
    }
}
export function getUserlist(item)
{
    return{
        type : USER_LIST
        
    }
}

