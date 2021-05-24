/* eslint-disable prettier/prettier */

import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, useTheme, TextInput, Button } from 'react-native-paper';

export default function Signup({

}) {
    const { colors } = useTheme();
    const [username, setUsername] = React.useState<string>('');
    return (
        <View style={styles.container}>
            <View style={styles.titleWrap}>
                <Text style={styles.title}>Choose Your Username</Text>
                <Text style={styles.subTitle}>You can always change it later</Text>
            </View>
            <TextInput
                label="Email"
                value={username}
                mode={'outlined'}
                onChangeText={value => setUsername(value)}
                style={styles.input}
                textContentType={'username'}
            />
            <Button onPress={() => {console.log('clicked!')}} mode={'contained'}>Next</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    titleWrap: {
        alignSelf: 'center',
        marginBottom: 16,
    },
    title: {
        fontSize: 24,
        color: '#ffff',
        fontWeight: '600',
        marginBottom: 16
    },
    subTitle: {
        fontSize: 14, //@TODO: Make me constant.
        color: '#ffff',
        fontWeight: '400',
        textAlign: 'center'
    },
    input: {
        height: 48,
        borderRadius: 2,
        backgroundColor: '#718093',
        color: '#ffff',
        borderColor: '#ffff',
        marginBottom: 10,
        
    }

})
