import { useState } from 'react'

import { View, Text, TextInput, Pressable, Alert, Image } from 'react-native'
import * as SecureStore from 'expo-secure-store'

import { useDispatch } from 'react-redux'
import { add } from '../store'

import styles from '../styles'

const Add_Site = () => {
    const [site, set_site] = useState()
    const [user, set_user] = useState()
    const [password, set_password] = useState()
    const [show, set_show] = useState(true)

    const dispatch = useDispatch()

    const Save = () => {
        const Get_Data = async (key) => {
            let Data = await SecureStore.getItemAsync(key)
            return Data
        }
        const key = 'Data_Base'
        const value =
        {
            site,
            user,
            password
        }
        Get_Data('Data_Base')
            .then(async Data => {
                if (Data) {
                    const Parse_Data = window.JSON.parse(Data)
                    Parse_Data.push(value)
                    const value_string = window.JSON.stringify(Parse_Data)
                    await SecureStore.setItemAsync(key, value_string)
                    dispatch(add(value))
                    Alert.alert('Great', 'Your data is safe🔐')
                    Discard()
                }
                else {
                    const value_string = window.JSON.stringify([value])
                    await SecureStore.setItemAsync(key, value_string)
                    dispatch(add(value))
                    Alert.alert('Great', 'Your data is safe🔐')
                    Discard()
                }

            })
    }

    const Discard = () => {
        set_password('')
        set_site('')
        set_user('')
    }

    const Change = () => {
        set_show(!show)
    }

    return (
        <View>
            <Text style={[styles.text, styles.bold]}>Site:</Text>
            <TextInput
                onChangeText={set_site}
                value={site}
                placeholder='Password Manager'
                placeholderTextColor='#f0f8ff50'
                style={styles.input}
                disableFullscreenUI={true}
            />
            <Text style={[styles.text, styles.bold]}>User:</Text>
            <TextInput
                onChangeText={set_user}
                value={user}
                placeholder='password@manager.com'
                placeholderTextColor='#f0f8ff50'
                style={styles.input}
                autoCapitalize='none'
                autoComplete='off'
                disableFullscreenUI={true}
            />
            <Text style={[styles.text, styles.bold]}>Password:</Text>
            <View style={styles.row}>
                <TextInput
                    onChangeText={set_password}
                    value={password}
                    placeholder='1235'
                    placeholderTextColor='#f0f8ff50'
                    style={[styles.input, { flex: 1 }]}
                    autoCapitalize='none'
                    autoComplete='off'
                    disableFullscreenUI={true}
                    secureTextEntry={show}
                />
                <Pressable onPressIn={Change} onPressOut={Change}>
                    <Image source={require('../assets/icons/eye_outline.png')} style={styles.icon} />
                </Pressable>
            </View>
            <View style={[styles.row, styles.centred]}>
                <Pressable style={styles.button_red} onPress={Discard}>
                    <Text style={[styles.text_button, styles.text_centred]}>Discard</Text>
                </Pressable>
                <Pressable style={styles.button_green} onPress={Save}>
                    <Text style={styles.text_centred} >Save</Text>
                </Pressable>
            </View>
        </View>
    )
}
export default Add_Site