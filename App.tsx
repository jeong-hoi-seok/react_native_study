import * as React from 'react';
import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import {
    createNativeStackNavigator,
    NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {
    Text,
    View,
    TouchableHighlight,
} from 'react-native';
import { useCallback } from 'react';

type RootStackParamList = {
    Home: undefined;
    Details: undefined;
};
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
type DetailsScreenProps = NativeStackScreenProps<ParamListBase, 'Details'>;

function HomeScreen({ navigation }: HomeScreenProps) {
    
    const onClick = useCallback(() => {
        navigation.navigate('Details');
    }, [navigation]);

    return (
    <>
        <View style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'flex-end'}}>
            <TouchableHighlight
                underlayColor={'white'}
                onPress={onClick}
            >
                <Text>홈 화면</Text>
            </TouchableHighlight>
        </View>
        <View style={{flex: 2, backgroundColor: 'blue'}}></View>
    </>
    );
}

function DetailsScreen({ navigation }: DetailsScreenProps) {
    const onClick = useCallback(() => {
        navigation.navigate('Home');
    }, [navigation]);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableHighlight onPress={onClick}>
                <Text>디테일 화면</Text>
            </TouchableHighlight>
        </View>
    );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: '홈화면' }}
                />
                <Stack.Screen
                    name="Details"
                    component={DetailsScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;