import React, { useContext } from "react";
import { StyleSheet } from 'react-native';
import { Context } from '../context/MemoContext';
import MemoForm from "../components/MemoForm";

const EditScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const { state, editMemo } = useContext(Context)

    const memo = state.find(
        (memo) => memo.id === id
    );

    return (
        <MemoForm
            initialValues={{ title: memo.title, content: memo.content }}
            onSubmit={(title, content) => {
                editMemo(id, title, content, () => navigation.pop())
            }} />
    );
};

const styles = StyleSheet.create({});

export default EditScreen;