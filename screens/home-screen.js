import { StyleSheet, Image, View, SafeAreaView } from 'react-native'
import tw from 'twrnc';
import { NavOptions } from '../components';

export const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: 'contain'
                    }}
                    source={{
                        uri: 'https://links.papareact.com/gzs'
                    }}
                />
                <NavOptions />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})