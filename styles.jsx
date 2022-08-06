import { StyleSheet } from "react-native"
import Constants from 'expo-constants'


const alice_blue = '#f0f8ff'
const principal_color = '#17171d'
const principal_color_var = '#2e2e3b'
const secondary_color = '#fc0'
const red = '#b91919'

const styles = StyleSheet.create({
  //Mockup
  container: {
    backgroundColor: principal_color,
    marginTop: Constants.statusBarHeight
  },

  //Styled Text
  title: {
    width: 280,
    height: 40,
    resizeMode: 'contain'
  },
  text: {
    color: alice_blue
  },
  text_button:{
    color: secondary_color
  },
  text_centred: {
    textAlign:'center'
  },
  bold: {
    fontSize: 20,
    fontWeight: '700',
    textTransform: 'capitalize'
  },

  //Alignment
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  centred: {
    justifyContent: 'center'
  },

  //Buttons
  button_green: {
    margin: 2,
    paddingHorizontal: 20,
    paddingVertical: 6,
    backgroundColor: secondary_color,
    borderColor: secondary_color,
    borderRadius: 3,
    flex: 2,
  },
  button_red: {
    margin: 2,
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: secondary_color,
    borderRadius: 3,
    flex: 1,
  },

  //Decorations
  input: {
    color: alice_blue,
    backgroundColor: principal_color_var,
    padding: 0
  },
  icon: {
    height: 28,
    width: 28,
    backgroundColor: principal_color_var,
  },
  decorator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    backgroundColor: alice_blue,
  },
})

export default styles
