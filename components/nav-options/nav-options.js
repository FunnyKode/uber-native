import { Icon } from "@rneui/themed";
import { StyleSheet, FlatList, Text, Image, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';

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
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
        >
          <Image
            style={{ width: 120, height: 120, resizeMode: 'contain' }}
            source={{ uri: item.image }}
          />
          <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
          <Icon
            style={tw`mt-2 bg-black rounded-full w-10 mt-4`}
            name='arrowright'
            color='white'
            type='antdesign'
          />
        </TouchableOpacity>
      )}
    />
  )
}

const styles = StyleSheet.create({})