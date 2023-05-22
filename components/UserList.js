
import { FlatList, Text, View } from "react-native"
import {getUserlist} from './redux/action'
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";
const  UserList =()=>
{
    const dispatch=useDispatch();
    const userList=useSelector((state)=>state.reducer)

    useEffect(()=>{
        dispatch(getUserlist())
    },[])
        const [data,setdata]=useState(userList);

    console.warn("Data in user list",data);
     return(
        <View>
            <Text>Ge</Text>
        {
           data.length?
             data.map(({item})=><Text style={{color:'black'}}>Hello</Text>)
          :null
        }       
     </View>
    );

};
export default UserList;