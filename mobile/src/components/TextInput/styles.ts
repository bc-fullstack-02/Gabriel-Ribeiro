import { THEME } from "../../Theme";
import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        borderWidth: 2,
        borderColor:"red",
        maxWidth: "100%",
        minWidth: 140,
        borderRadius: 10,
        backgroundColor: THEME.COLORS.BACKGROUND_800,
        padding: 8
    },
    input: {
        marginStart: 8,
        color: THEME.COLORS.TEXT,
        fontFamily: THEME.FONT_FAMILY.REGULAR
    },
  
});