import React from 'react';
import { StyleSheet, StatusBar, Dimensions, View, TouchableOpacity, Text, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { observer } from 'mobx-react';
import { connect } from 'react-redux';

import { loginStore } from '../../store';

import ReduxStore from '../../redux/reduxStore';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

let input0Ref, input1Ref, nav;
let t1, t2;


const header = () => {
    return (
        <View style={headerStyles.container}>
            <TouchableOpacity onPress={() => nav.goBack()}>
                <Ionicons name={'arrow-back'} color={'#1DA1F2'} size={width * 0.07} />
            </TouchableOpacity>

            <View style={{ flex: 1 }} />

            <TouchableOpacity onPress={loginStore.classSet}>
                <AntDesign name={'twitter'} size={width * 0.06} color={'#1DA1F2'} />
            </TouchableOpacity>


            <TouchableOpacity style={headerStyles.signUpButton}>
                <Text style={headerStyles.signUpButtonText}>Sign up</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Entypo name={'dots-three-vertical'} color={'#1DA1F2'} size={width * 0.07} />
            </TouchableOpacity>
        </View >
    );
}

const Login = observer((props) => {
    t1 = new Date().getTime();
    React.useEffect(() => {
        t2 = new Date().getTime();

        console.log('TEST', t2 - t1);
    });

    const [focusedInput, setFocusedInput] = React.useState(-1); //bu state'i store'da tutmanın mantığı yok!
    const [passwordShown, setPasswordShown] = React.useState(false); //bu state'i store'da tutmanın mantığı yok!

    nav = useNavigation();

    //console.log(props);

    return (
        <View style={styles.container}>
            {header()}

            <Text style={styles.text1}>Log in to Twitter.</Text>

            <TouchableOpacity
                style={[styles.inputContainer, focusedInput === 0 && { borderColor: '#1DA1F2' }]}
                onPress={() => input0Ref.focus()}
                activeOpacity={1}
            >
                <Text style={styles.placeholderText}>Phone, mail or username</Text>

                <TextInput
                    ref={d => { input0Ref = d }}
                    style={styles.input}
                    onFocus={() => setFocusedInput(0)}
                    value={loginStore.username}
                    onChangeText={loginStore.setUsername}
                //value={props.LoginReducer.userName}
                //onChangeText={d => ReduxStore.dispatch({ type: 'SET_USERNAME', payload: d })}
                />
            </TouchableOpacity>


            <TouchableOpacity
                style={[styles.inputContainer, focusedInput === 1 && { borderColor: '#1DA1F2' }]}
                onPress={() => input1Ref.focus()}
                activeOpacity={1}
            >
                <Text style={styles.placeholderText}>Password</Text>

                <TextInput
                    ref={d => { input1Ref = d }}
                    style={styles.input}
                    onFocus={() => setFocusedInput(1)}
                    secureTextEntry={!passwordShown}
                    returnKeyType={'done'}
                    value={loginStore.password}
                    onChangeText={loginStore.setPassword}
                />

                <TouchableOpacity style={styles.eyeButton} onPress={() => setPasswordShown(!passwordShown)}>
                    <FontAwesome5 name={'eye'} size={width * 0.05} color={passwordShown ? '#1DA1F2' : '#00000066'} />
                </TouchableOpacity>
            </TouchableOpacity>


            <TouchableOpacity style={styles.forgotPasswordButton}>
                <Text style={styles.placeholderText}>Forgot password?</Text>
            </TouchableOpacity>


            <View style={{ flex: 1 }} />
            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Log in</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },

    text1: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#000',
        marginLeft: '2%',
    },


    inputContainer: {
        borderBottomWidth: 2,
        borderColor: '#00000066',
        marginHorizontal: '2%',
        marginTop: '6%'
    },
    placeholderText: {
        color: '#00000066',
        fontSize: 16,
    },
    input: {
        padding: 0,
        marginVertical: 6
    },

    eyeButton: {
        position: 'absolute',
        bottom: '10%',
        right: 5
    },

    forgotPasswordButton: {
        alignSelf: 'center',
        marginTop: '5%'
    },

    bottomContainer: {
        borderTopWidth: 1,
        borderColor: '#00000066',
        width: '100%',
        alignItems: 'flex-end',
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    loginButton: {
        backgroundColor: '#1DA1F2',
        paddingVertical: 5,
        paddingHorizontal: 18,
        borderRadius: 999
    },
    loginButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    }
});

const headerStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: '4%',
        paddingHorizontal: '2%',
        justifyContent: 'space-between'
    },

    signUpButton: {
        marginRight: '4%',
        marginLeft: '10%'
    },
    signUpButtonText: {
        color: '#1DA1F2',
        fontWeight: 'bold',
        fontSize: 17,
        paddingHorizontal: '3%'
    }
});

//const mapStateToProps = reducers => ({ LoginReducer: reducers.LoginReducer });
const mapStateToProps = ({ LoginReducer }) => ({ LoginReducer });
const _Login = connect(mapStateToProps)(Login);

export { _Login as Login };
