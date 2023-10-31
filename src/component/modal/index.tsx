import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react';
import Modal from 'react-native-modal'

interface IModalProps {
    isVisible: boolean,
    setIsVisible:(t:boolean)=>void;
    onSort: (title:string) => void;
}
export interface IModalData{
    id:number,
    title:string,
}
const data:IModalData[] = [
    {
        id: 1,
        title: "Sort by name."
    },
    {
        id: 2,
        title: "Sort by price."
    },
    {
        id: 3,
        title: "Sort by rating."
    }
]

const SortModal = ({ isVisible,onSort,setIsVisible }: IModalProps) => {

    const sortHandler=(item:IModalData)=>{
        onSort(item.title)
        setIsVisible(false);
        console.log(item.title)
    }
    return (
        <Modal isVisible={isVisible} style={styles.modal}>
            <View style={styles.modalContainer}>
                <FlatList
                    data={data}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity style={[styles.touchableItem, index === data.length - 1 ? { borderBottomWidth: 0 } : null]} onPress={()=>sortHandler(item)}>
                            <Text style={styles.itemText}>{item.title}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </Modal>
    )
}

export default SortModal

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContainer: {
        backgroundColor: 'white',
        width: 200,
        height: 200,
        borderRadius: 10,
    },
    touchableItem: {
        paddingTop: 20,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemText: {
        fontSize: 16
    }
})
