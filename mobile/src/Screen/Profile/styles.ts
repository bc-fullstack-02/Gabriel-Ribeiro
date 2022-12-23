import { THEME } from "../../Theme";
import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
container:{
   flex:1,
   padding: 24,
},
heading:{
   flexDirection:"row",
   alignItems:"center",
   paddingHorizontal:12,
   paddingBottom:12,
   borderBottomWidth:1,
},
userNameText:{
   fontFamily:THEME.FONT_FAMILY.BOLD,
   fontSize:THEME.FONT_SIZE.MD,
   color:THEME.COLORS.TEXT,
   marginStart:12,
},

});