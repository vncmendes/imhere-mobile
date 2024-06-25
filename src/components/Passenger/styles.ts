import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1f1e25",
    borderRadius: 5,
    marginBottom: 16
  },
  name: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
    marginLeft: 16,
  },
  button: {
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 24
  }
  
})