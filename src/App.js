import React from 'react';
import { View } from 'react-native';

import { Navigation } from './Navigation';

import { Splash } from './screens';

const App = () => {
    const [splash, setSplash] = React.useState(true);

    React.useEffect(() => { //componentDidMount
        setTimeout(() => setSplash(false), 1500);
    }, []);

    return (
        <View style={{ flex: 1 }}>

            {/* KOŞUL ? TRUE İSE YAPILACAK : FALSE İSE YAPILACAK */}
            {splash ? <Splash /> : <Navigation />}

        </View>
    );
}

export { App };