import { View, Image } from "react-native";
import React from "react";
import { styles } from "./styles";
import { Heading } from "../../components/Heading";
import { Input } from "../../components/TextInput" ;
import { User } from "phosphor-react-native";

export function Login() {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/logo.png')} style={require('../../../assets/images/logo.png')} resizeMethod="scale" />
      <Heading title="Sysmap Parrot" subtitle="Faça o login e comece a usar" />
      <Input.Root>
        <Input.Icon><User color="white"/></Input.Icon>
        <Input.Input></Input.Input>
      </Input.Root>
    </View>
  );
}
