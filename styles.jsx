import { StyleSheet } from "react-native"
import Constants from 'expo-constants'


const alice_blue = '#f0f8ff'
const principal_color = '#17171d'
const principal_color_var = '#2e2e3b'
const secondary_color = '#fc0'

const styles = StyleSheet.create({
  container: {
    backgroundColor: principal_color,
    marginTop: Constants.statusBarHeight
  },

  title: {
    width: 300,
    height: 40,
    resizeMode: 'contain'
  },

  text: {
    color: alice_blue
  },
  svg:{
    fill: secondary_color,
  }
})

export default styles
