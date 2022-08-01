import { StatusBar } from 'expo-status-bar'
import { Text, View, TouchableWithoutFeedback, Alert } from 'react-native'
import styles from './styles'

import Main_View from './main'

function App() {
  return (
    <View style={styles.container}>
      <Main_View />
      <StatusBar style="auto" />
    </View>
  )
}

export default App