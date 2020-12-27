import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';


import { Navigation } from './Navigation';
import { Splash } from './screens';

import store from './redux/reduxStore';

const App = () => {
    const [splash, setSplash] = React.useState(true);

    React.useEffect(() => { //componentDidMount
        setTimeout(() => setSplash(false), 1500);
    }, []);

    return (
        <Provider store={store}>
            <View style={{ flex: 1 }}>

                {/* KOŞUL ? TRUE İSE YAPILACAK : FALSE İSE YAPILACAK */}
                {splash ? <Splash /> : <Navigation />}

            </View>
        </Provider>
    );
}

export { App };