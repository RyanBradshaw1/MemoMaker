import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const MemoForm = ({ onSubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View>
            <Text style={styles.label}>Memo Title:</Text>
            <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />
            <Text style={styles.label}>Memo Content:</Text>
            <TextInput
                style={styles.input}
                value={content}
                onChangeText={(text) => setContent(text)}
                height={200}
                multiline={true}
                textAlignVertical='top'
            />
            <Button
                title="Save Memo"
                onPress={() => onSubmit(title, content)}
            />
        </View>
    );
};

MemoForm.defaultProps = {
    initialValues: {
        title: '',
        content: '',
    }
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5,
    },
    label: {
        fontSize: 20,
        marginBottom: 10,
        marginHorizontal: 10
    },
});

export default MemoForm;