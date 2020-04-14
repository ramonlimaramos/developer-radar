import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../src/pages/Main';
import Profile from '../src/pages/Profile';

const Stack = createStackNavigator();

function Routes() {
    return(
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="Home"
                screenOptions={{
                    headerTintColor: '#FFF',
                    headerBackTitleVisible: false,
                    headerStyle: {
                        backgroundColor: '#7D40E7',
                    }
                }}>
                <Stack.Screen name="DevRadar" component={Main} />
                <Stack.Screen 
                    name="Profile"
                    component={Profile}
                    options={{ title: 'Github Profile' }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;