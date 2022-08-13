import { useState, useRef, useEffect } from 'react'

import { View, Text, TextInput, Pressable, Alert, Image, Animated } from 'react-native'
import * as SecureStore from 'expo-secure-store'

import { useDispatch, useSelector } from 'react-redux'
import { add, change } from '../store'

import styles from '../styles'

const Add_Site = () => {
    const [site, set_site] = useState()
    const [user, set_user] = useState()
    const [password, set_password] = useState()
    const [show_password, set_show_password] = useState(true)
    const Move_Animation = useRef(new Animated.Value(0)).current
    const Visibility = useSelector(state => state.Add_View)
    const dispatch = useDispatch()

    const Add_show = () => {
        Animated.timing(Move_Animation, {
            toValue: 180,
            duration: 500,
            useNativeDriver: false
        }).start()
    }

    const Add_Hide = () => {
        Animated.timing(Move_Animation, {
            toValue: 0,
            duration: 500,
            useNativeDriver: false
        }).start()
    }

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
            password,
            date: new Date()
        }
        Get_Data('Data_Base')
            .then(async Data => {
                if (Data) {
                    const Parse_Data = window.JSON.parse(Data)
                    Parse_Data.push(value)
                    const value_string = window.JSON.stringify(Parse_Data)
                    await SecureStore.setItemAsync(key, value_string)
                    dispatch(add({ ...value, date: '1' }))
                    Alert.alert('Great', 'Your data is safe🔐')
                    Discard()
                }
                else {
                    const value_string = window.JSON.stringify([value])
                    await SecureStore.setItemAsync(key, value_string)
                    dispatch(add({ ...value, date: '1' }))
                    Alert.alert('Great', 'Your data is safe🔐')
                    Discard()
                }

            })
    }

    const Discard = () => {
        set_password('')
        set_site('')
        set_user('')
        Add_Hide()
        dispatch(change())
    }

    const Change = () => {
        set_show_password(!show_password)
    }

    const Generate_Password = () => {
        let length = 10,
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~\\`|}{[]:;?><,./-=",
            retVal = ""

        for (let i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n))
        }

        set_password(retVal)
    }

    useEffect(() => {
        Visibility ? Add_show() : Add_Hide()
    }, [Visibility])
    

    return (
        <Animated.View style={[{ bottom: Move_Animation}, styles.standard_margin, styles.add]}>
            <Text style={[styles.text, styles.bold]}>New Password:</Text>
            <TextInput
                onChangeText={set_site}
                value={site}
                placeholder='Site Name'
                placeholderTextColor='#f0f8ff50'
                style={styles.input}
                disableFullscreenUI={true}
            />
            <TextInput
                onChangeText={set_user}
                value={user}
                placeholder='User'
                placeholderTextColor='#f0f8ff50'
                style={styles.input}
                autoCapitalize='none'
                autoComplete='off'
                disableFullscreenUI={true}
            />
            <View style={styles.row}>
                <TextInput
                    onChangeText={set_password}
                    value={password}
                    placeholder='Password'
                    placeholderTextColor='#f0f8ff50'
                    style={[styles.input, { flex: 1 }]}
                    autoCapitalize='none'
                    autoComplete='off'
                    disableFullscreenUI={true}
                    secureTextEntry={show_password}
                />
                <Pressable onPress={Generate_Password}>
                    <Image source={require('../assets/icons/color-wand-outline.png')} style={[styles.icon_input]} />
                </Pressable>
                <Pressable onPressIn={Change} onPressOut={Change}>
                    <Image source={require('../assets/icons/eye-outline.png')} style={styles.icon_input} />
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
        </Animated.View>
    )
}
export default Add_Site