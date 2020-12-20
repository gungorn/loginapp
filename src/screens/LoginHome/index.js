import React from 'react';
import { View, Text, StyleSheet, Dimensions, StatusBar, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const LoginHome = () => {
    //naviagation prop'un otomatik olarak getirilmesini sağlar
    //bu sayede manuel olarak çocuk bileşenlere navigaiton prop geçmemize gerek kalmıyor
    const nav = useNavigation();

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'#00000022'} />
            <AntDesign name={'twitter'} size={width * 0.08} color={'#1DA1F2'} style={styles.logo} />


            <View>
                <Text style={styles.text1}>See what's happening{'\n'}in the world right now.</Text>

                <TouchableOpacity onPress={() => nav.navigate('SignUp1')} style={styles.createAccountButton}>
                    <Text style={styles.createAccountButtonText}>Create account</Text>
                </TouchableOpacity>
            </View>


            <View style={styles.loginButtonContainer}>
                <Text style={styles.text2}>Have an account alredy?</Text>

                <TouchableOpacity onPress={() => nav.navigate('Login')}>
                    <Text style={styles.loginButtonText}>Log in</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between'
    },

    logo: {
        alignSelf: 'center',
        marginTop: '3%'
    },

    text1: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 32,
        alignSelf: 'center'
    },


    createAccountButton: {
        backgroundColor: '#1DA1F2',
        borderRadius: 999,
        width: '80%',
        paddingVertical: height * 0.01,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: '10%'
    },
    createAccountButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 22
    },


    loginButtonContainer: {
        flexDirection: 'row',
        marginLeft: '10%',
        marginBottom: '5%'
    },
    text2: {
        color: 'gray',
        fontSize: 17,
        alignSelf: 'center'
    },
    loginButtonText: {
        color: '#1DA1F2',
        fontSize: 17,
        alignSelf: 'center',
        marginLeft: 8
    }
});


export { LoginHome };