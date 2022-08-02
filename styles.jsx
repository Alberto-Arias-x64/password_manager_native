import { StyleSheet } from "react-native"
import Constants from 'expo-constants'


const alice_blue = '#f0f8ff'
const principal_color = '#17171d'
const principal_color_var = '#2e2e3b'
const secondary_color = '#fc0'
const red = '#b91919'

const styles = StyleSheet.create({
  container: {
    backgroundColor: principal_color,
    marginTop: Constants.statusBarHeight
  },

  title: {
    width: 280,
    height: 40,
    resizeMode: 'contain'
  },

  text: {
    color: alice_blue
  },

  input: {
    color: alice_blue,
    backgroundColor: principal_color_var,
    padding: 0
  },

  bold: {
    fontSize: 20,
    fontWeight: '700',
    textTransform: 'capitalize'
  },

  decorator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    backgroundColor: alice_blue,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  button_green: {
    margin: 2,
    paddingHorizontal: 20,
    paddingVertical: 2,

    backgroundColor: secondary_color,
    borderColor: secondary_color,
    borderRadius: 3,
  },

  button_red: {
    margin: 2,
    paddingHorizontal: 20,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: red,
    borderRadius: 3,
  },

})

export default styles
