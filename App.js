import { StatusBar } from 'expo-status-bar'
import { Text, View, TouchableWithoutFeedback, Alert } from 'react-native'
import { useFonts } from 'expo-font'
import styles from './styles'

import Main_View from './main'

export default function App() {
  let [font_load] = useFonts({
    'Raleway-Thin': require('./assets/fonts/Raleway-Thin.ttf')
  })
  return (
    <View style={styles.container}>
      <Main_View />
      <StatusBar style="auto" />
    </View>
  );
}
