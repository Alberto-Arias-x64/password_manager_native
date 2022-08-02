import { View, Text, Image, ScrollView } from "react-native"
import styles from './styles'

const sites = [
    {
        name: "Facebook",
        password: "1234",
        last_updated: "20-jun-2019",
        img: ""
    },
    {
        name: "Instagram",
        password: "1234",
        last_updated: "20-jun-2019",
        img: ""
    },
    {
        name: "Printeres",
        password: "1234",
        last_updated: "20-jun-2019",
        img: ""
    },
    {
        name: "Linkedin",
        password: "1234",
        last_updated: "20-jun-2019",
        img: ""
    },
    {
        name: "Gmail",
        password: "1234",
        last_updated: "20-jun-2019",
        img: ""
    },
]
const Decorator = () => <View style={styles.decorator} />

const Main_View = () => {
    const Name_List = () => {
        return sites.map(site => {
            return (
                <View key={Math.random()}>
                    <View style={styles.row}>
                        <Decorator/>
                        <Text style={[styles.bold, styles.text]} >{site.name}</Text>
                    </View>
                    <Text style={styles.text} >{site.password}</Text>
                    <Text style={styles.text} >{site.last_updated}</Text>
                </View>
            )
        }
        )
    }
    return (
        <View>
            <View>
                <Image
                    source={require('./assets/logo.png')}
                    style={styles.title} />
            </View>
            <ScrollView>
                <Name_List />
            </ScrollView>
        </View>
    )
}
export default Main_View