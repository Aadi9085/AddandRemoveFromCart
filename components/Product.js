import { useEffect, useState } from "react"
import { Button, Image, StyleSheet, Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { AddToCart, RemoveFromCart } from "./redux/action"
import {reducer} from './redux/reducer'

export default  Product =(props)=>
{
    const   item=props.item
    const [isAdded,setisAdded]=useState(false)    
        //dispatch now
        const dispatch=useDispatch();
        //get the cartitems from store
        const cartItem=useSelector((state)=>state.reducer)
        //call the product whenever update
        useEffect(()=>{
                let result=cartItem.filter((element)=>
                {
                    return element==item
                })
                if (result.length) {
                    setisAdded(true)
                    
                }
                else{
                    setisAdded(false)
                }
        },[cartItem])
        const handleAddtocart=(item)=>
        {
            dispatch(AddToCart(item))

        }
        const handleRemovefromcart=()=>
        {
            //dispatch action to remove the product 
            //compare with the name 
            dispatch(RemoveFromCart(item.name))
        }

    return(
        <View style={styles.container}>
            <View style={styles.wrapper}>

            <Text style={styles.text} >{item.name}</Text>
            <Text style={styles.text}>{item.price}</Text>
            <Text style={styles.text}>{item.color}</Text>
            
            <Image style={{height:100,width:100,alignSelf:'center'}} source={{uri:item.image}}/>
            {
                isAdded?
            <Button title="Remove from Cart" onPress={()=>handleRemovefromcart(item)}/>
            :
            <Button title="ADD to  cart" onPress={()=>handleAddtocart(item)}/>
            }
            </View>
        </View>
    )

}
const styles=StyleSheet.create({
    wrapper:{
        flex:1,
        borderBottomColor:'blue',
        borderBottomWidth:2,
        marginBottom:40,
        margin:10,
        
    },
    container:{
        flex:1,
        marginBottom:40
    },
    text:{
        fontSize:20,
        fontWeight:'800',
        textAlign:'center'
        
    }


})