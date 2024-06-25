import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { Passenger } from "../../components/Passenger";

function handleAddPassenger() {
  if (passengers.includes("")) {
    return Alert.alert("Lista de Passageiros", "Já existe um passageiro com o exato mesmo nome, adicione uma diferença !")
  }  
}

function handleRemovePassenger(name: string) {
  return Alert.alert("Remoção de Passageiro !!!", `Deseja Realmente Remover o Passageiro ${name}?`, [
    {
      text: "Sim",
      onPress: () => Alert.alert("Passageiro Excluído !"),
    },
    {
      text: "Não",
      style: "cancel"
    }
  ])
}

const passengers = ["Vini", "Rodrigo", "Joao", "Graci", "Pretinha", "Morcega", "Dolinho", "Lucas", "Luiz", "Daniel"];

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Lista de Passageiros </Text>
      <Text style={styles.description}> Observações de busca de cada usuário</Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome" placeholderTextColor="#6b6b6b"
        />
        <TouchableOpacity style={styles.button} onPress={handleAddPassenger}>
          <Text style={styles.buttonText}> + </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={passengers}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Passenger
              key={item}
              name={item}
              onRemove={() => handleRemovePassenger(item)}
            />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyList}>Sua lista está vazia, adicione passageiros !</Text>
        )}
      >
      </FlatList>

      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {
          passengers.map(passenger => (
            <Passenger
              key={passenger}
              name={passenger}
              onRemove={handleRemovePassenger}
            />
          ))
        }
      </ScrollView> */}

    </View>
  )
}