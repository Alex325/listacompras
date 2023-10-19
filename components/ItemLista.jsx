import { Alert } from "react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { excluirItem } from "./dados";

export default function ItemLista({ item, navigation }) {

  function mostrarConfirmacao(item) {

    Alert.alert(
      'Alert Title',
      'Tem certeza?',
      [
        {
          text: 'Sim',
          onPress: () => excluirItem(item),
          style: 'default',
        },
        {
          text: 'Não',
          style: 'cancel',
        },
      ],
      {
        cancelable: true,
      },
    );

  }

  function alterarItem(item) {
    navigation.navigate('Formulario', item);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textItem}>{item.descricao}</Text>
      <Text style={styles.textItem}>{item.quantidade}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.deleteButton} onPress={() => mostrarConfirmacao(item)}>
          <Text style={styles.buttonText}>X</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.editButton} onPress={() => alterarItem(item)}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: 10,
    width: "100%",
  },
  buttonsContainer: {
    flexDirection: "row-reverse",
    borderBottomWidth: 1,
    borderBottomColor: "#CCC",
    paddingBottom: 10,
    marginTop: 10,
  },
  editButton: {
    marginLeft: 10,
    height: 40,
    backgroundColor: "blue",
    borderRadius: 10,
    padding: 10,
    fontSize: 12,
    elevation: 10,
    shadowOpacity: 10,
    shadowColor: "#ccc",
    alignItems: "center",
  },
  deleteButton: {
    marginLeft: 10,
    height: 40,
    width: 40,
    backgroundColor: "red",
    borderRadius: 10,
    padding: 10,
    fontSize: 12,
    elevation: 10,
    shadowOpacity: 10,
    shadowColor: "#ccc",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  textItem: {
    fontSize: 20,
  },
});