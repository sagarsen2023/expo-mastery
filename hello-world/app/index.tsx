import { View, Text } from "react-native";

const index = () => {
  return (
    <View
      style={{
        backgroundColor: "red",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
      style={{
        color: "white",
        fontSize: 24,
      }}
      >Hello World</Text>
    </View>
  );
};

export default index;
