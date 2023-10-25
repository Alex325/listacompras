import { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";


import ItemLista from "./ItemLista";
import { getLista } from "./dados";

export default function Lista(props) {
  const [itens, setItens] = useState([]);

  useEffect(()=>{
    getLista().then((lista) => setItens(lista))
  },[itens, props])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Compras</Text>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.itemsContainer}
      >
        {itens.map((item) => (
          <ItemLista key={item.id} item={item} navigation={props.navigation}/>
        ))}
        {itens.length == 0 && <Text style={styles.text}>Lista Vazia</Text>}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#18225c",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 15,
  },
  scrollContainer: {
    width: "85%",
    marginTop: 5,
    marginBottom: 20,
  },
  itemsContainer: {
    padding: 20,
    borderRadius: 10,
    alignItems: "stretch",
    backgroundColor: "#f5f5f5",
  },
  text: {
    textAlign: "center",
    fontSize: 20,
  },
});
