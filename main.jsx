import { useState, useEffect } from 'react'

import { View, Text, Image, ScrollView, Pressable } from 'react-native'
import * as SecureStore from 'expo-secure-store'

import { useSelector, useDispatch } from 'react-redux'
import { change } from './store'

import { format, register } from 'timeago.js'

import styles from './styles'

const localeFunc = (number, index, totalSec) => {
    return [
        ['Now', 'right now'],
        ['%s S', 'in %s seconds'],
        ['1 Min', 'in 1 minute'],
        ['%s Min', 'in %s minutes'],
        ['1 H', 'in 1 hour'],
        ['%s H', 'in %s hours'],
        ['1 D', 'in 1 day'],
        ['%s D', 'in %s days'],
        ['1 W', 'in 1 week'],
        ['%s W', 'in %s weeks'],
        ['1 M', 'in 1 month'],
        ['%s M', 'in %s months'],
        ['1 Y', 'in 1 year'],
        ['%s Y', 'in %s years']
    ][index]
}
register('my-locale', localeFunc)

const Dot_Decorator = () => <View style={styles.dot_decorator} />

const Main_View = () => {
    const [App_Data, Set_App_Data] = useState([])
    const Local_Data = useSelector(state => state.Data_Base)
    const dispatch = useDispatch()

    const Show_Add_View = () => {
        dispatch(change())
    }

    const Get_Data = async (key) => {
        let Data = await SecureStore.getItemAsync(key)
        return Data
    }

    const First_Letter = text => text ? text[0] : '?'

    const Sites_List = ({ sites }) => {
        return sites.map(({ site, user, password, date }) => {
            return (
                <View key={Math.random()} style={styles.row} >
                    <View style={[styles.card_decorator, styles.standard_margin]}>
                        <Text style={styles.giant}>{First_Letter(site)}</Text>
                    </View>
                    <View style={styles.size_auto}>
                        <View style={[styles.row, styles.standard_margin]}>
                            <Image source={require('./assets/icons/globe-outline.png')} style={styles.icon} />
                            <Text style={[styles.bold, styles.text, styles.size_auto]} >{site}</Text>
                            <Pressable>
                                <Image source={require('./assets/icons/ellipsis-vertical-outline.png')} style={[styles.icon, styles.opacity_half]} />
                            </Pressable>
                        </View>
                        <View style={[styles.row, styles.size_auto, styles.pill_decorator]}>
                            <Image source={require('./assets/icons/person-circle-outline.png')} style={styles.icon} />
                            <Text selectable={true} style={styles.text} >{user}</Text>
                        </View>
                        <View style={styles.row}>
                            <View style={[styles.row, styles.pill_decorator, { flex: 2.5 }]}>
                                <Image source={require('./assets/icons/key-outline.png')} style={styles.icon} />
                                <Text selectable={true} style={styles.text} >{password}</Text>
                            </View>
                            <View style={[styles.row, styles.size_auto, styles.pill_decorator]}>
                                <Image source={require('./assets/icons/hourglass-outline.png')} style={styles.icon} />
                                <Text style={styles.text} >{format(new Date(date), 'my-locale')}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            )
        })
    }
    useEffect(() => {
        Get_Data('Data_Base')
            .then(Data => {
                if (Data) {
                    const Parse_Data = window.JSON.parse(Data)
                    Set_App_Data(Parse_Data)
                }
            })
            .catch(() => {
                console.log('nel pastel')
            })
    }, [Local_Data])

    useEffect(() => {
        SecureStore.deleteItemAsync('Data_Base')
    }, [])


    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Image
                    source={require('./assets/logo.png')}
                    style={[styles.title]} />
                <View style={{flex:1}}></View>
                <Pressable onPress={Show_Add_View}>
                    <Image
                        source={require('./assets/icons/add-outline.png')}
                        style={[styles.icon_plus]}
                    />
                </Pressable>
            </View>
            <ScrollView>
                <Sites_List sites={App_Data} />
            </ScrollView>
        </View>
    )
}
export default Main_View