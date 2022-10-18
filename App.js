import { StatusBar } from 'expo-status-bar'
import { Text, View, TouchableWithoutFeedback, Alert ,KeyboardAvoidingView } from 'react-native'

import { Provider } from 'react-redux'
import store from './store'

import Main_View from './main'
import Add_Site from './components/add'

import styles from './styles'

function App() {
  return (
    <Provider store={store}>
      <KeyboardAvoidingView style={styles.size_auto}>
        <Main_View />
        <Add_Site />
      </KeyboardAvoidingView>
      <StatusBar style="light" />
    </Provider>
  )
}

export default App