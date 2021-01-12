/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'

import Button from './src/components/Button'

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button label='AC' />
        <Button label='/' />
        <Button label='7' />
        <Button label='8' />
        <Button label='9' />
        <Button label='*' />
        <Button label='4' />
        <Button label='5' />
        <Button label='6' />
        <Button label='-' />
        <Button label='1' />
        <Button label='2' />
        <Button label='3' />
        <Button label='+' />
        <Button label='0' />
        <Button label='.' />
        <Button label='=' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
})

export default App
