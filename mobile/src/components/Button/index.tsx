import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import React, { Component, ReactNode } from "react";
import { styles } from "./styles";


interface ButtonProps extends TouchableOpacityProps {
    title: string
}
export function Button(props: ButtonProps) {
  return <TouchableOpacity style={styles.container} {...props}>
    <Text style={styles.container}>{props.title}</Text>
  </TouchableOpacity>;
}
