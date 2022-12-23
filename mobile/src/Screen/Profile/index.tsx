import React, { useContext, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Context as AuthContext } from "../../context/AuthContext";
import { UserCircle } from "phosphor-react-native";
import { Button } from "../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";


export function Profile( ) {
  const {user, logout} = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style ={styles.heading}>
        <UserCircle color="white" size={49} weight="thin"/>
        <Text style={styles.userNameText}>{user}</Text>
      </View>
      <Button title={"Sair"} onPress={logout} />

    </SafeAreaView>
 
  );
}
