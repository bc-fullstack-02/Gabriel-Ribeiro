import { Text, View } from 'react-native'
import React, { Component, ReactNode } from 'react'
import { styles } from './styles'



export function Loading() {
    return (
      <View style ={styles.container}>
        <Text>Carregando...</Text>
      </View>
    )
}