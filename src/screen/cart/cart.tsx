import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import { Regular } from '../../style/fonts'
import { useNavigation } from '@react-navigation/native'

const Cart = () => {
  const navigation:any=useNavigation();
    const cartHandle=()=>{
         navigation.navigate('CartDetails')
    }
  return (
    <TouchableOpacity style={styles.container} onPress={cartHandle}>
       <Image source={require('../../../assets/image/shopping-bag.png')} style={styles.img}/>
       <View style={styles.cartCount}>
        <Text style={styles.cartCountText}>5</Text>
       </View>
    </TouchableOpacity>
  )
}

export default Cart

const styles = StyleSheet.create({
    container:{
        padding:5
    },
    img:{
        width:25,
        height:25
    },
    cartCount:{
        position:'absolute',
        right:0,
        top:0,
        // backgroundColor:'red',
        // padding:5
    },
    cartCountText:{
        color:'red',
        fontFamily:Regular
    }
})