import { useEffect, useState } from "react"
import { Text, View } from "react-native"
import { useSelector } from "react-redux"

export default  Header =()=>
{
        const [cartItem,setcartItem]=useState(0)
    const cartData=useSelector((state)=>state.reducer)
    useEffect(()=>
    {
        setcartItem(cartData.length)
    },[cartData])
    return(

        <View style={{backgroundColor:'orange',alignItems:'flex-end'}}>
            <Text style={{fontWeight:'800',fontSize:30}}>{cartItem}</Text>
        </View>
    )

}