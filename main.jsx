import { useState, useEffect } from 'react'

import { View, Text, Image, ScrollView, Pressable } from 'react-native'
import * as SecureStore from 'expo-secure-store'

import { useSelector } from 'react-redux'

import styles from './styles'

const Dot_Decorator = () => <View style={styles.dot_decorator} />

const Main_View = () => {
    const [App_Data, Set_App_Data] = useState([])
    const Local_Data = useSelector(state => state.Data_Base)

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
                            <Text style={styles.text} >{user}</Text>
                        </View>
                        <View style={styles.row}>
                            <View style={[styles.row, styles.pill_decorator,{flex:2.5}]}>
                                <Image source={require('./assets/icons/key-outline.png')} style={styles.icon} />
                                <Text style={styles.text} >{password}</Text>
                            </View>
                            <View style={[styles.row, styles.size_auto, styles.pill_decorator]}>
                                <Image source={require('./assets/icons/hourglass-outline.png')} style={styles.icon} />
                                <Text style={styles.text} >{date}</Text>
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
        <View>
            <View style={styles.row}>
                <Image
                    source={require('./assets/logo.png')}
                    style={[styles.title]} />
                <Pressable>
                    <Image
                        source={require('./assets/icons/add-outline.png')}
                        style={[styles.icon]}
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