import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
interface SearchSortInputProps {
    onSearch: (searchText: string) => void;
    setIsVisible:(t:boolean)=>void;
  }
const Header:React.FC<SearchSortInputProps> = ({onSearch,setIsVisible}) => {
    const navigation = useNavigation();
   const handlesearch=(txt:string)=>{
     onSearch(txt);
   }
    return (
        <View>
            <View style={styles.container}>
                <View><Text style={{ color: 'red', fontSize: 16 }}>G-cart</Text></View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <FontAwesome name='search' size={15} style={{ position: 'absolute', left: 30 }} />
                    <TextInput style={styles.searchbar}
                        placeholder='Search.....'
                        placeholderTextColor={'gray'}
                        onChangeText={(txt)=>handlesearch(txt)}
                    />
                    <FontAwesome name='sort' size={25} style={{ marginLeft: 5 }} onPress={()=>setIsVisible(true)} />
                </View>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 20
    },
    searchbar: {
        height: 30,
        width: '85%',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        paddingHorizontal: 30,
    }
})