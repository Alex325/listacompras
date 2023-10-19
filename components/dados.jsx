import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export async function excluirItem(item) {

  try {
    const lista = await getLista();

    let i = 0;

    for (; lista[i].id != item.id; i++) {
    }

    lista.splice(i, 1);

    const jsonLista = JSON.stringify(lista);
    await AsyncStorage.setItem("lista", jsonLista);
  } catch (e) {
    console.log(e);
  }

}

export async function salvarItem(itemLista) {
  try {
    const lista = await getLista();
    lista.push(itemLista);

    const jsonLista = JSON.stringify(lista);
    await AsyncStorage.setItem("lista", jsonLista);
  } catch (e) {
    console.log(e)
  }
}

export async function getLista() {
  try{
    const dados = await AsyncStorage.getItem("lista")
    return dados ? JSON.parse(dados) : []
  } catch (e) {
    console.log(e)
  }
}
