import React, { useContext, useState } from "react";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Context as AuthContext } from "../../context/AuthContext";
import { UserCircle } from "phosphor-react-native";
import { Button } from "../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import { THEME } from "../../Theme";
import { FocusAwareStatusBar } from "../../components/FocusAwareStatusBar";


export function Profile( ) {
  const {user, logout} = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar
        barStyle="light-content"
        backgroundColor={THEME.COLORS.BACKGROUND_800}
        />
      <View style ={styles.heading}>
        <UserCircle color="white" size={49} weight="thin"/>
        <Text style={styles.userNameText}>{user}</Text>
      </View>
      <Button title={"Sair"} onPress={logout} />

    </SafeAreaView>
 
  );
}
