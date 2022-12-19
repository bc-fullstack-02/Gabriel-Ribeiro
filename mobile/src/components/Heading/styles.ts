import { THEME } from "../../Theme";
import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container:{
        width: "100%",
        padding: 32,
    },
    title:{
        color:THEME.COLORS.TEXT,
        textAlign: "center",
        fontSize: THEME.FONT_SIZE.LG,
        fontFamily: THEME.FONT_FAMILY.BLACK
    },
    subtitle:{
        color: THEME.COLORS.CAPTION_400,
        fontSize:THEME.FONT_SIZE.MD,
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        textAlign: "center",
    },
    text:{
        textDecorationColor:THEME.COLORS.TEXT
    }
})