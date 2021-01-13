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
    },
    operationBtn: {
        color: '#fff',
        backgroundColor: '#fa8231'
    },
    btnDouble: {
        width: (Dimensions.get('window').width / 4) * 2,
    },
    btnTiple: {
        width: (Dimensions.get('window').width / 4) * 3,
    },
})

export default (props) => {
    const stylesButton = [styles.btn]
    if (props.double) stylesButton.push(styles.btnDouble)
    if (props.triple) stylesButton.push(styles.btnTiple)
    if (props.operation) stylesButton.push(styles.operationBtn)
    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}