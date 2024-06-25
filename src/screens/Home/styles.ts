import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 32
  },
  description: {
    color: "#6b6b6b",
    marginBottom: 12
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#1f1e25",
    borderRadius: 5,
    color: "#fff",
    padding: 16,
    marginRight: 8
  },
  button: {
    width: 56,
    height: 56,
    backgroundColor: "#31cf67",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    fontSize: 24,
    color: "#fff"
  },
  form: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    marginBottom: 24
  },
  emptyList: {
    color: "#fff"
  }
});