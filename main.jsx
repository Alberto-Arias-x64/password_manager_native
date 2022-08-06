import { useState, useEffect } from 'react'

import { View, Text, Image, ScrollView } from 'react-native'
import * as SecureStore from 'expo-secure-store'

import { useSelector } from 'react-redux'

import styles from './styles'

const Decorator = () => <View style={styles.decorator} />

const Main_View = () => {
    const [App_Data, Set_App_Data] = useState([])
    const Local_Data = useSelector(state => state.Data_Base)

    const Get_Data = async (key) => {
        let Data = await SecureStore.getItemAsync(key)
        return Data
    }

    const Sites_List = ({ sites }) => {
        return sites.map(({ site, user, password }) => {
            return (
                <View key={Math.random()}>
                    <View style={styles.row}>
                        <Decorator />
                        <Text style={[styles.bold, styles.text]} >{site}</Text>
                    </View>
                    <Text style={styles.text} >{user}</Text>
                    <Text style={styles.text} >{password}</Text>
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
    },[])


    return (
        <View>
            <View>
                <Image
                    source={require('./assets/logo.png')}
                    style={styles.title} />
            </View>
            <ScrollView>
                <Sites_List sites={App_Data} />
            </ScrollView>
        </View>
    )
}
export default Main_View