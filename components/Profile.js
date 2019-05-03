import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Profile extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Profile</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E6E0D0',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        fontSize: 40,
        color: '#282832',
    },
    sub: {
        fontSize: 16,
        color: '#282832',
    }
});

