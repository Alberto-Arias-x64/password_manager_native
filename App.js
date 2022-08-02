import { StatusBar } from 'expo-status-bar'
import { Text, View, TouchableWithoutFeedback, Alert } from 'react-native'
import styles from './styles'

import Main_View from './main'
import Add_Site from './components/add'

function App() {
  return (
    <View style={styles.container}>
      <Main_View />
      <Add_Site/>
      <StatusBar style="auto" />
    </View>
  )
}

export default App