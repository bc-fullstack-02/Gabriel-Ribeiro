import { Text, View } from "react-native";
import React, { Component, ReactNode } from "react";
import { styles } from "./styles";

interface Props {
  children?: React.ReactNode;
}

export function Background({ children }: Props) {
  return <View style={styles.container}>{children}</View>;
}
