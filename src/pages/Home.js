import react from "react";
import {View,
        Text, 
        TextInput,
        TouchableOpacity,
        StyleSheet} from  'react-native';
export  default function Home(){
    return(
        <View>
            <Text>Meus Filems</Text>
            <Text>Olá Renan, Boa noite!</Text>
            <TouchableOpacity>
                <Text>Criar</Text>
            </TouchableOpacity>
            
        </View>
    );
}
// Criando os estilos
const styles = StyleSheet.create({
    container
})
