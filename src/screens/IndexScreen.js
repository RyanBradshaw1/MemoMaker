import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from "../context/MemoContext";
import { EvilIcons } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
    const { state, deleteMemo } = useContext(Context);

    return (
        <View>
            <Button title="Create Memo" onPress={() => navigation.navigate('Create')} />
            <FlatList
                data={state}
                keyExtractor={(memo) => memo.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title} - {item.id}</Text>
                                <TouchableOpacity onPress={() => deleteMemo(item.id)}>
                                    <EvilIcons style={styles.trashIcon} name="trash" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <EvilIcons name="plus" style={styles.plusIcon} />
            </TouchableOpacity>
        ),
    };
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 10
    },
    title: {
        fontSize: 18,
    },
    trashIcon: {
        fontSize: 30
    },
    plusIcon: {
        fontSize: 30,
        paddingHorizontal: 10
    }
});

export default IndexScreen;