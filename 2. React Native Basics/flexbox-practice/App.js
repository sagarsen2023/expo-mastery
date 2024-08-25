import React from "react";
import { Text, View } from "react-native";

// Views use default flexDirection: column

// By default child element takes the full height of the parent element nott the width. The width is determined by the child element width if width is not specified.

// By default the alignItems is set to stretch. This means that the child element will take the full width of the parent element.

// flex: 1 is used to make the child element takes as much space as possible along the main axis.

export default function App() {
  return (
    <View
      style={{
        padding: 50,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "stretch",
        width: "80%",
        height: 300,
      }}
    >
      <View
        style={{
          backgroundColor: "red",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{
          color: "white",
          fontWeight : "bold"
        }}>1</Text>
      </View>
      <View
        style={{
          backgroundColor: "blue",
            flex: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: "green",
            flex: 3,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>3</Text>
      </View>
    </View>
  );
}
