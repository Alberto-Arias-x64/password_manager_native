import { StatusBar } from 'expo-status-bar'
import { Text, View, TouchableWithoutFeedback, Alert } from 'react-native'

import { Provider } from 'react-redux'
import store from './store'

import Main_View from './main'
import Add_Site from './components/add'

function App() {
  return (
    <Provider store={store}>
      <View>
        <Main_View />
        <Add_Site />
      </View>
      <StatusBar style="light" />
    </Provider>
  )
}

export default App