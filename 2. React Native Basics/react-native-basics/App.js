import { Button, StyleSheet, Text, View } from "react-native";

// We mainly work with core components like View, Text, Button, Image, etc.
export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.dummyText}>Using StyleSheet to apply css</Text>
      </View>
      <Text
        style={{
          color: "red",
          margin: 16,
          borderWidth: 1,
          borderColor: "red",
          padding: 8,
        }}
      >
        Inline Css example.
      </Text>

      {/* The following type of button declarations are not accepted */}
      {/* <Button>Click me</Button> */}

      <Button title="Click Me" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  // We can define styles in a separate object and use it in the component
  dummyText: {
    color: "green",
    margin: 16,
    borderWidth: 2,
    borderColor: "green",
    padding: 8,
  }
});
