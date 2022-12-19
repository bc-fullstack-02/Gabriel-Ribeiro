import { THEME } from "../../Theme";
import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column",
        alignItems:"center",
    },
    logo: {
        width:100,
        height:100,
        marginTop:32
    },
    text:{
        textDecorationColor:THEME.COLORS.TEXT
    },
});