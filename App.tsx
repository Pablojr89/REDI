import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Button } from 'react-native';

const App = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [status, setStatus] = useState('');


    const handleVerifyLogin = async () => {
        setStatus('');


        const req = await fetch('https://', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await req.json();

        if (json.status == 'ok') {
            setStatus('Acesso LIBERADO!');

        } else {
            setStatus('Acesso NEGADO!');

        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>REDI - Redação Digital</Text>

            <Text style={styles.h1}>Email</Text>

            <TextInput
                style={styles.input}
                placeholder="Digite seu e-mail"
                value={email}
                onChangeText={t => setEmail(t)} />

            <Text style={styles.h1}>Senha</Text>

            <TextInput style={styles.input}
                placeholder="Digite sua senha"
                value={password}
                onChangeText={t => setPassword(t)}
                secureTextEntry={true} />

            <Text style={styles.h2}>Esqueci minha senha</Text>

            <Button title='enviar' onPress={handleVerifyLogin} />

            <Text style={styles.status}>{status}</Text>

        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,

        padding: 20,

    },

    header: {
        color: 'blue',
        fontSize: 25,
        textAlign: 'center',
        padding: 20,
        marginBottom: 30,
    },

    h1: {
        marginTop: 20,
        fontSize: 20,
        padding: 10,
    },

    h2: {
        padding: 10,
        fontSize: 15,
        marginBottom: 30,

    },

    input: {
        height: 45,
        fontSize: 18,
        color: 'blue',
        backgroundColor: '#999',
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight: 10,
    },

    status: {
        margin: 50,
        color: '#FFF',
        fontSize: 18,
        textAlign: 'center',
    },

    button: {

    }

}
)
export default App;