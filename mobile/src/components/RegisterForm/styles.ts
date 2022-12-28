import { THEME } from "../../Theme";
import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column",
        alignItems:"center",
    },
    containerPosition :{
        alignItems:"center",
       
    },
    logo: {
        width:100,
        height:100,
    },
   button:{
    borderRadius: 2
   },
   link:{
    color: THEME.COLORS.CAPTION_400,
    fontSize:THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    textAlign: "center",
    textDecorationLine:"underline"
   }
});