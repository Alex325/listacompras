import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";

import { salvarItem } from "./dados";
import ItemLista from "./ItemLista";

export default function Formulario({ navigation, route }) {

  const [descricao, setDescricao] = useState('')
  const [quantidade, setQuantidade] = useState('')

  const handleButtonPress = async () => {
    const itemLista = {
      id: new Date().getTime(),
      descricao : descricao,
      quantidade : parseInt(quantidade)
    }
 
    await salvarItem(itemLista)

    setDescricao('')
    setQuantidade('')
    navigation.navigate('Lista', itemLista)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Item para comprar</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="O que está faltando em casa?"
          value={descricao}
          onChangeText={(valor)=>{setDescricao(valor)}}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite a quantidade"
          keyboardType="numeric"
          value={quantidade}
          onChangeText={setQuantidade}
        />
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          { !route.params ? <Text style={styles.buttonText}>Salvar</Text> : <Text style={styles.buttonText}>Alterar</Text>}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6655CC",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 50,
  },
  inputContainer: {
    flex: 1,
    marginTop: 30,
    width: "90%",
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "#fff",
  },
  input: {
    marginTop: 10,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
  },
  button: {
    marginTop: 10,
    height: 60,
    backgroundColor: "blue",
    borderRadius: 10,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
