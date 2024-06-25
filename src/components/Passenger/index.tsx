import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../../components/Passenger/styles";

type Props = {
  name: string,
  onRemove: () => void;
}

export function Passenger({ name, onRemove }: Props) { // exp func Pass(props: Props) {}, another way
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        { name }
      </Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>
          -
        </Text>
      </TouchableOpacity>
    </View>
  )
}