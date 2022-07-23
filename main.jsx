import { View, Text, ScrollView } from "react-native"
import styles from "./styles"
import Outline from './assets/icons/outline'

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

const Main_View = () => {
    const Name_List = () => {
        return sites.map(site => {
            return (
                <>
                    <Text style={styles.text} key={Math.random() + Math.random()}>{site.name}</Text>
                    <Text style={styles.text}>{site.password}</Text>
                    <Text style={styles.text}>{site.last_updated}</Text>
                </>
            )
        }
        )
    }
    return (
        <View>
            <View>
                <Outline/>
                <Text style={styles.title}>Password Manager</Text>
            </View>
            <ScrollView>
                <Name_List />
                <Name_List />
                <Name_List />
            </ScrollView>
        </View>
    )
}
export default Main_View