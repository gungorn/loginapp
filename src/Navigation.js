import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { LoginHome } from './screens';

const stack1 = createStackNavigator();


const Navigation = () => {
    return (
        <NavigationContainer>
            <stack1.Navigator initialRouteName={'LoginHome'}>
                <stack1.Screen
                    name={'LoginHome'}
                    component={LoginHome}
                    options={{ headerShown: false }}
                />
            </stack1.Navigator>
        </NavigationContainer>
    );
}

export { Navigation };