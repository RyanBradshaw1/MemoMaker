import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/MemoContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);

    const memo = state.find((memo) => memo.id === navigation.getParam('id'));

    return (
        <View>
            <Text style={styles.title}>{memo.title}</Text>
            <Text style={styles.contents}>{memo.content}</Text>
        </View>
    );
};

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('Edit', { id: navigation.getParam('id') })
                }
            >
                <EvilIcons name="pencil" size={35} />
            </TouchableOpacity>
        ),
    };
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 10,
    },
    contents: {
        marginHorizontal: 10
    }
});

export default ShowScreen;