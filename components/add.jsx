import { useState } from 'react'
import { View, Text, TextInput, Pressable  } from 'react-native'
import styles from '../styles'

const Add_Site = () => {
    const [site, set_site] = useState()
    const [password, set_password] = useState()

    return (
        <View>
            <Text style={[styles.text, styles.bold]}>Site:</Text>
            <TextInput
                onChangeText={set_site}
                value={site}
                placeholder='Nepe'
                placeholderTextColor='#f0f8ff50'
                style={styles.input}
            />
            <Text style={[styles.text, styles.bold]}>Password:</Text>
            <TextInput
                onChangeText={set_password}
                value={password}
                placeholder='Linderman'
                placeholderTextColor='#f0f8ff50'
                style={styles.input}
            />
            <View style={styles.row}>
                <Pressable style={styles.button_green}>
                    <Text>Save</Text>
                </Pressable>
                <Pressable style={styles.button_red}>
                    <Text style={styles.text}>Discard</Text>
                </Pressable>
            </View>
        </View>
    )
}
export default Add_Site