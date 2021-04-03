import * as React from 'react';
import { Text, TextInput, Button } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

export default function Login() {
    const [username, setUsername] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Instagram</Text>
            <View>
                <TextInput
                    label="Username, Phone and Email"
                    value={username}
                    onChangeText={value => setUsername(value)}
                    mode={'outlined'}
                    style={styles.input}
                    textContentType={"password"}
                />
                <TextInput
                    label="Password"
                    value={password}
                    mode={'outlined'}
                    onChangeText={value => setPassword(value)}
                    style={styles.input}
                    textContentType={"password"}
                />
                <Button onPress={() => {console.log('clicked!')}} mode={'contained'} style={styles.btn}>Login</Button>
            </View>
            <View style={styles.footer}>
                <Text style={styles.ftr_text}>Diden't have an account? <Text style={styles.link}>Create New</Text></Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: '600',
        marginBottom: 20,
    },
    input: {
        height: 48,
        borderRadius: 2,
        backgroundColor: "#718093",
        color: "#ffff",
        borderColor: "#ffff",
        marginBottom: 10
    },
    btn: {
        marginTop: 30,
    },
    footer: {
        justifyContent: 'flex-end',
        alignSelf: 'center',
        borderTopWidth: StyleSheet.hairlineWidth,
        paddingTop: 10,
        marginTop: 40,
        width: '100%',
        alignContent: 'center'
    },
    link: {
        color: '#4a69bd'
    },
    ftr_text: {
        textAlign: 'center'
    }
})
