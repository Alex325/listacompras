import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
} from "react-native";

import { salvarItem, alterarItem } from "./dados";
import ItemLista from "./ItemLista";
import { useIsFocused } from "@react-navigation/native";

export default function Formulario({ navigation, route }) {

  const editMode = Boolean(route.params);
  const editItem = route.params;
  const isFocused = useIsFocused();

  const [descricao, setDescricao] = useState(editMode ? editItem.descricao : '')
  const [quantidade, setQuantidade] = useState(editMode ? String(editItem.quantidade) : '')

  useEffect(() => {
    setDescricao(editMode ? editItem.descricao : '');
    setQuantidade(editMode ? String(editItem.quantidade) : '');
  }, [editItem]);

  const handleButtonPress = async () => {
    const itemLista = {
      id: new Date().getTime(),
      descricao: descricao,
      quantidade: parseInt(quantidade)
    }

    if (!editMode) await salvarItem(itemLista);
    else {
      itemLista.id = editItem.id;
      await alterarItem(itemLista);
    }

    setDescricao('')
    setQuantidade('')
    route.params = null;
    navigation.navigate('Lista', itemLista);
  }
  {return isFocused ? (
    < View style={styles.container} >
      <Text style={styles.title}>Item para comprar</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="O que está faltando em casa?"
          value={descricao}
          onChangeText={(valor) => { setDescricao(valor) }}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite a quantidade"
          keyboardType="numeric"
          value={quantidade}
          onChangeText={setQuantidade}
        />
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          {!editMode ? <Text style={styles.buttonText}>Salvar</Text> : <Text style={styles.buttonText}>Alterar</Text>}
        </TouchableOpacity>
      </View>
    </View >
  ) : null}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#18225c",
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
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
  },
  button: {
    marginTop: 10,
    height: 60,
    backgroundColor: "#1c22e6",
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
