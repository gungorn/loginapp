import React from 'react';
import { StyleSheet, Dimensions, View, TouchableOpacity, Text, TextInput, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

let input0Ref, input1Ref, nav;


const header = () => {
    return (
        <View style={headerStyles.container}>
            <TouchableOpacity style={{ flex: 1 }} onPress={() => nav.goBack()}>
                <Ionicons name={'arrow-back'} color={'#1DA1F2'} size={width * 0.07} />
            </TouchableOpacity>

            <AntDesign name={'twitter'} size={width * 0.06} color={'#1DA1F2'} />

            <View style={{ flex: 1 }} />
        </View>
    );
}

const SignUp1 = () => {
    nav = useNavigation();

    const [name, setName] = React.useState('');

    return (
        <View style={styles.container}>
            {header()}

            <Text style={styles.text1}>Create your account</Text>

            <View style={{ flex: 1 }} />

            <ScrollView>
                <TextInput
                    placeholder={'Name'}
                    placeholderTextColor={'#00000088'}
                    ref={d => { input0Ref = d }}
                    style={styles.input}
                    value={name}
                    onChangeText={d => setName(d)}
                />
                <Text style={styles.nameCharsNumber}>{50 - name.length}</Text>

                <View style={{ height: 20 }} />

                <TextInput
                    placeholder={'Phone number or email adress'}
                    placeholderTextColor={'#00000088'}
                    ref={d => { input0Ref = d }}
                    style={styles.input}
                />

                <View style={{ height: 30 }} />

                <TouchableOpacity style={styles.dataPickerButton}>
                    <Text style={styles.dataPickerButtonText}>Date of birth</Text>
                    <Text style={styles.dataPickerButtonText2}>
                        Aliqua proident tempor mollit occaecat ipsum occaecat enim deserunt.
                        Et commodo nostrud deserunt ex magna.
                </Text>
                </TouchableOpacity>
            </ScrollView>

            <View style={{ flex: 1 }} />

            <View style={{ flex: 1 }} />
            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.bottomButton}>
                    <Text style={styles.bottomButtonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },

    text1: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        marginLeft: '10%'
    },
    nameCharsNumber: {
        marginRight: '10%',
        textAlign: 'right',
        marginTop: 5,
        fontSize: 16,
        color: '#00000066'
    },


    input: {
        fontSize: 20,
        marginHorizontal: '10%',
        borderBottomWidth: 2,
        borderColor: '#00000044'
    },

    dataPickerButton: {
        marginHorizontal: '10%',

    },
    dataPickerButtonText: {
        fontSize: 20,
        color: '#00000066',
        borderBottomWidth: 2,
        borderColor: '#00000044',
        paddingBottom: 8,
        marginBottom: 5
    },
    dataPickerButtonText2: {
        fontSize: 15,
        color: '#00000066',
        fontWeight: 'bold'
    },


    bottomContainer: {
        borderTopWidth: 1,
        borderColor: '#00000066',
        width: '100%',
        alignItems: 'flex-end',
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    bottomButton: {
        backgroundColor: '#1DA1F2',
        paddingVertical: 5,
        paddingHorizontal: 18,
        borderRadius: 999
    },
    bottomButtonText: {
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
    }
});

export { SignUp1 };