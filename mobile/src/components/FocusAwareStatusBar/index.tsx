import { useIsFocused } from "@react-navigation/native";
import { StatusBar, StatusBarProps } from "react-native";

interface Props extends StatusBarProps {}

export function FocusAwareStatusBar( props : Props){
    const isFocused = useIsFocused();

    return isFocused ? <StatusBar {...props} /> : null;
}