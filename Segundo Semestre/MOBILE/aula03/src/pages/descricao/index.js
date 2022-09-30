import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-web';
import { useState } from 'react';

export default function Descricao({ route }) {
    var {descricao} = route.params;
    return(
        <View>
            <Text>{descricao.marca}</Text>
            <Text>{descricao.sabor}</Text>
        </View>
    )
}