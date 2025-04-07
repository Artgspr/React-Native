import React from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useTarefas } from '../hooks/useTarefas';

export default function App(){
    const { tarefas, novaTarefa, setNovaTarefa, adicionarTarefa, removerTarefa } = useTarefas();

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Features a serem implementadas:</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite uma nova feature"
                    value={novaTarefa}
                    onChangeText={setNovaTarefa}
                />
            <TouchableOpacity style={styles.button} onPress={adicionarTarefa}>
                <Text style={styles.buttonText}>Adicionar</Text>
            </TouchableOpacity>
            </View>

            <FlatList
                data={tarefas}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.tarefaContainer}>
                        <Text style={styles.tarefaTexto}>{item.texto}</Text>
                        <TouchableOpacity onPress={() =>  removerTarefa(item.id)}>
                            <Text style={styles.remover}>X</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        padding: 20, 
        backgroundColor: '#205781'
    },
    titulo: {
        fontSize: 24, 
        color: '#98D2C0'
    },
    inputContainer: {
        flexDirection: 'row', 
        marginTop: 30
    },
    input: {
        flex: 1, 
        marginRight: 10, 
        backgroundColor: 'white'
    },
    button: {
        backgroundColor: '#98D2C0',
        padding: 5,
        borderRadius: 20,
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 16,
        color: '#F6F8D5',
        fontWeight: 'bold',
    },
    tarefaContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },
    tarefaTexto: { 
        fontSize: 16,
        color: '#98D2C0',
    },
    remover:{ 
        fontSize: 18,
        color: '#d67e87',
        marginLeft: 7,
    },
});