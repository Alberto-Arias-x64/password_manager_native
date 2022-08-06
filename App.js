import { StatusBar } from 'expo-status-bar'
import { Text, View, TouchableWithoutFeedback, Alert } from 'react-native'

import { Provider } from 'react-redux'
import  store  from './store'

import Main_View from './main'
import Add_Site from './components/add'

import styles from './styles'

function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Main_View />
        <Add_Site />
        <StatusBar style="auto" />
      </View>
    </Provider>
  )
}

export default App