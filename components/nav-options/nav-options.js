import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen", // change in the future
  },
]


export const NavOptions = () => {
  return (
    <View>
      <Text>Hello tour NavOptions</Text>
    </View>
  )
}

const styles = StyleSheet.create({})