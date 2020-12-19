import React from 'react';
import { StyleSheet, StatusBar, Dimensions } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Splash = () => {
    return (
        <>
            <StatusBar translucent backgroundColor={'#00000099'} barStyle={'light-content'} />

            { //tüm text css prop'larını destekler
                <AntDesign name={'twitter'} size={width * 0.15} color={'#fff'} style={styles.logo} />
            }
        </>
    );
}

const styles = StyleSheet.create({
    logo: {
        flex: 1,
        backgroundColor: '#1DA1F2',
        textAlign: 'center',
        textAlignVertical: 'center',
    }
});

export { Splash };