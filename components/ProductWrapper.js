
import React from 'react';

import {
    Button,
  ScrollView,
  View,
} from 'react-native';
import Header from './Header';
import Product from './Product';
const ProductWrapper =({navigation})  => {

  const product=[
        {
          name:"Redmi 10",
          price:'10k',
          color:'blue',
          image:'https://iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png'
        },

{
          name:"Nokia 10",
          price:'20k',
          color:'white',
          image:'https://iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png'
        },
        {
          name:"Samsung 10",
          price:'15k',
          color:'skyblue',
          image:'https://iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png'
        },
        {
          name:"Oppo 10",
          price:'19k',
          color:'orange',
          image:'https://iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png'
        },
        {
          name:"NIki 10",
          price:'19k',
          color:'orange',
          image:'https://iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png'
        }
        

  ]
  return(
    <View>
        <Button title='Go to User List' onPress={()=>navigation.navigate("User")}/>
        <Header/>
        <ScrollView>
          {
            product.map((item)=>
            <Product item={item}/>
            )
          }

        </ScrollView>

    </View>


  )
};



export default ProductWrapper;
