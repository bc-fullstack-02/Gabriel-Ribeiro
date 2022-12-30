import React, { useState } from "react";
import { StatusBar, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FocusAwareStatusBar } from "../../components/FocusAwareStatusBar";
import { THEME } from "../../Theme";
import { styles } from "./styles";


export function Friends( ) {

  return (
    <SafeAreaView style={styles.container}>
       <FocusAwareStatusBar barStyle="light-content" backgroundColor={THEME.COLORS.BACKGROUND_800}/>
       <Text>Friends</Text>
    </SafeAreaView>
  );
}
