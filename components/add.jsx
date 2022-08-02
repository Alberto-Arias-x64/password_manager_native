import { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import styles from '../styles'

const Add_Site = () => {
    return (
        <View>
            <Text style={styles.text}>Site:</Text>
            <TextInput/>
            <Text style={styles.text}>Password:</Text>
            <TextInput/>
            <Button
            title='Save'
            />
        </View>
    )
}
export default Add_Site