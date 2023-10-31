import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'

const Loading = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text>Please wait....</Text>
                <ActivityIndicator size={50} color="red" />
            </View>
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        marginTop:50,
        
    }
})