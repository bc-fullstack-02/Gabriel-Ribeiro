import { THEME } from "../../Theme";
import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        borderWidth: 2,
        borderColor: THEME.COLORS.BACKGROUND_800,
        maxWidth: "100%",
        minWidth: 240,
        borderRadius: 12,
        backgroundColor: THEME.COLORS.BACKGROUND_800,
        padding: 8,
        
    },
    input: {
        marginStart: 8,
        color: THEME.COLORS.CAPTION_400,
        fontFamily: THEME.FONT_FAMILY.REGULAR,
       
    },
  
});