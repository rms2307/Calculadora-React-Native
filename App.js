import React, { useState } from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'

import Button from './src/components/Button'
import Display from './src/components/Display'

export default () => {
  const [displayValue, setDisplayValue] = useState(0)

  addDigit = (n) => {
    setDisplayValue(n)
  }

  cleanMemory = () => {
    setDisplayValue(0)
  }

  setOperation = operation => {

  }

  return (
    <View style={styles.container}>
      <Display value={displayValue} />
      <View style={styles.buttons}>
        <Button label='AC' triple onClick={cleanMemory} />
        <Button label='/' operation onClick={() => setOperation('/')} />
        <Button label='7' onClick={() => addDigit(7)} />
        <Button label='8' onClick={() => addDigit(8)} />
        <Button label='9' onClick={() => addDigit(9)} />
        <Button label='*' operation onClick={() => setOperation('*')} />
        <Button label='4' onClick={() => addDigit(4)} />
        <Button label='5' onClick={() => addDigit(5)} />
        <Button label='6' onClick={() => addDigit(6)} />
        <Button label='-' operation onClick={() => setOperation('-')} />
        <Button label='1' onClick={() => addDigit(1)} />
        <Button label='2' onClick={() => addDigit(2)} />
        <Button label='3' onClick={() => addDigit(3)} />
        <Button label='+' operation onClick={() => setOperation('+')} />
        <Button label='0' double onClick={() => addDigit(0)} />
        <Button label='.' onClick={() => addDigit('.')} />
        <Button label='=' operation onClick={() => setOperation('=')} />
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