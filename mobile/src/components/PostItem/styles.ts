import { THEME } from "../../Theme";
import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
   
   container:{
      flex:1,
      paddingTop:12,
   },
   link:{
    color: THEME.COLORS.CAPTION_400,
    fontSize:THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    textAlign: "center",
    textDecorationLine:"underline"
   },
   heading: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 12,
      paddingBottom: 12,
      borderBottomColor: THEME.COLORS.BORDER, 
      fontFamily: THEME.FONT_FAMILY.BOLD,
      borderBottomWidth: 1,
   },
   usernameText: {
      color: THEME.COLORS.TEXT,
      marginStart: 12,
      fontFamily:THEME.FONT_FAMILY.BOLD,
      fontSize:THEME.FONT_SIZE.MD,
   },
   content: {
      flex:1
   },
   image:{
      height:200,
      width:300,
      borderRadius: 12,
      resizeMode: "stretch"
   },
   post :{
      borderBottomColor:THEME.COLORS.BORDER,
      borderBottomWidth:1,
      paddingBottom:12
   },
   postHeading: {
      flexDirection : "row",
      alignItems:"center",
      padding:12,
   },
   postUserText : {
      color: THEME.COLORS.TEXT,
      marginStart: 12,
      fontFamily: THEME.FONT_FAMILY.BOLD,
      fontSize: THEME.FONT_SIZE.MD,
   },
   contentBody: {
      paddingHorizontal : 24,
   },
   contentText: {
      color:THEME.COLORS.TEXT,
      marginBottom: 12,
      
   },
   footer: {
      flexDirection: "row",
      alignItems:"center",
      paddingHorizontal: 24,
   },
   number: {
      color: THEME.COLORS.TEXT,
      fontFamily: THEME.FONT_FAMILY.REGULAR,
      fontSize: THEME.FONT_SIZE.SM,
      marginStart: 4,
      marginEnd:24
   }

});