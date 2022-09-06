import react from "react";
import {View,
        Text, 
        TextInput,
        TouchableOpacity,
        StyleSheet} from  'react-native';
export  default function Home(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Meus Filems</Text>
            <Text style={styles.subtitulo}>Olá Renan, Boa noite!</Text>

            <TextInput style={styles.campo} placeholder="Nome do filme"/>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Criar</Text>
            </TouchableOpacity>

            
        </View>
    );
}
// Criando os estilos
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#30478C',
        paddingVertical: 70,
        paddingHorizontal: 20
    },

    titulo:{
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
        alignSelf: 'center',
    },

    subtitulo:{
        color: '#fff',
        fontSize: 15

    },

    campo:{
        backgroundColor: '#1F1E25',
        color: '#FFF',
        fontSize: 18,
        marginTop: 30,
        borderRadius: 7,
        padding: 15
    },

    greetings:{
        color: '#fff'
    },

    button:{
        backgroundColor: '#A370F7',
        padding: 7,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20
    },

    buttonText:{
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold'
    },
// Fim
});
