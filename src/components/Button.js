import React from 'react'
import { Text, StyleSheet, Dimensions, TouchableHighlight } from 'react-native'

const styles = StyleSheet.create({
    btn: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888'
    }
})

export default (props) => {
    return (
        <TouchableHighlight onPress={props.onClick}>
            <Text style={styles.btn}>{props.label}</Text>
        </TouchableHighlight>
    )
}