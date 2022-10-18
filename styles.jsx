import { StyleSheet, Dimensions } from "react-native"
import Constants from 'expo-constants'


const alice_blue = '#f0f8ff'
const principal_color = '#17171d'
const principal_color_var = '#2e2e3b'
const secondary_color = '#fc0'

let device_height = Dimensions.get('window').height;
let device_width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  //Mockup
  add: {
    height: 200,
    backgroundColor: principal_color,
  },
  container: {
    height: device_height,
    backgroundColor: principal_color,
    paddingTop: Constants.statusBarHeight,
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
  text_button: {
    color: secondary_color
  },
  text_centred: {
    textAlign: 'center'
  },
  bold: {
    fontSize: 20,
    fontWeight: '700',
    textTransform: 'capitalize'
  },
  giant: {
    fontSize: 50,
    fontWeight: '700',
  },

  //Alignment
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  centred: {
    justifyContent: 'center'
  },
  size_auto: {
    flex: 1
  },
  standard_padding: {
    padding: 5
  },
  standard_margin: {
    margin: 4
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
    paddingHorizontal: 10,
    marginVertical: 2,
    borderRadius: 5
  },
  icon: {
    height: 18,
    width: 18,
    marginRight: 5,
  },
  icon_plus: {
    height: 40,
    width: 40,
    marginRight: 5,
    top: 5,
  },
  icon_input: {
    height: 28,
    width: 28,
    backgroundColor: principal_color_var,
  },
  dot_decorator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    backgroundColor: alice_blue,
  },
  pill_decorator: {
    backgroundColor: principal_color_var,
    borderRadius: 5,
    marginHorizontal: 2,
    marginVertical: 2,
    paddingHorizontal: 8,
    paddingVertical: 1,
  },
  opacity_half: {
    opacity: 0.5
  },
  card_decorator: {
    height: 80,
    width: 80,
    backgroundColor: secondary_color,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default styles
