import { THEME } from "../../Theme";
import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
   
   link:{
    alignItems: "center",
    color: THEME.COLORS.CAPTION_400,
    fontSize:THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    textAlign: "center",
    textDecorationLine:"underline"
   },
   errorMessage:{
      color: THEME.COLORS.ERROR,
      textAlign: "center",

   }
});