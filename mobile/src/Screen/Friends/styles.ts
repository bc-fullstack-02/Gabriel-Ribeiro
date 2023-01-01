import { THEME } from "../../Theme";
import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
   link:{
    color: THEME.COLORS.CAPTION_400,
    fontSize:THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    textAlign: "center",
    textDecorationLine:"underline"
   }, 
   container:{
      flex:1,
      flexDirection: "column",
      
   },
   h1:{
      fontWeight: "bold",
      flexDirection:"column",
      paddingLeft:0,
      textAlign:"center",
      marginTop:20,
      marginBottom:10
   },
   li:{
      borderBottomWidth:1,
      borderColor:"gray",
      marginTop: 16,
      paddingLeft:20,
      
   },
   text:{
      fontWeight: "800",
      marginLeft:8
     
   },
   spacer: {
      display:"flex",
      marginBottom:10,
      justifyContent:"flex-start",
      flexDirection:"row"
   },
   unfollowButton:{
      backgroundColor:"gray",
      alignItems:"center",
      borderRadius:12,
      padding:12,
   }
});