import React, { useContext } from "react";
import { StyleSheet } from 'react-native';
import { Context } from '../context/MemoContext';
import MemoForm from "../components/MemoForm";

const CreateScreen = ({ navigation }) => {
    const { addMemo } = useContext(Context);

    return <MemoForm onSubmit={(title, content) => {
        addMemo(title, content, () => navigation.navigate('Index'))
    }} />
};

const styles = StyleSheet.create({

});

export default CreateScreen;