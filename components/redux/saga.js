import { useState } from 'react';
import {SET_USER_DATA, USER_LIST} from './constants'
import {takeEvery,put} from 'redux-saga/effects'

function* userList ( ) 
{
           
        //call the API here..
            let update={};
        const url="https://dummyjson.com/users/";
        let data=yield fetch(url);
            data= yield data.json();
            update=data.users;
            console.warn("update me kya hai ",update);
            // console.warn(data.users);
            // //put is the saga method , its like action and now data is sent to reducer 
            //now we handle the data in reducer
            yield put({type:SET_USER_DATA,data})
}


function* sagaData()
{
    yield takeEvery(USER_LIST,userList);
}
export default sagaData;