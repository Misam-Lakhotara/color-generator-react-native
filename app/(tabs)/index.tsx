import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const Index = () => {
  const [color, setColor] = useState("gray");
  const [activeColor, setActiveColor] = useState(null);

  const colors = ["red", "green", "blue"];

  const setRandomColor = () => {
    const index = Math.floor(Math.random() * colors.length);
    setColor(colors[index]);
    setActiveColor(colors[index]);
  };

  const handlePress = (color) => {
    setColor(color);
    setActiveColor(color);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Color</Text>

      <TouchableOpacity
        style={[
          styles.button,
          activeColor === "red" && { backgroundColor: "red" },
        ]}
        onPress={() => handlePress("red")}
      >
        <Text>Red</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.button,
          activeColor === "green" && { backgroundColor: "green" },
        ]}
        onPress={() => handlePress("green")}
      >
        <Text>Green</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.button,
          activeColor === "blue" && { backgroundColor: "blue" },
        ]}
        onPress={() => handlePress("blue")}
      >
        <Text>Blue</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.button,
          activeColor === "random" && { backgroundColor: color },
        ]}
        onPress={() => {
          setRandomColor();
          setActiveColor("random");
        }}
      >
        <Text>Random Color</Text>
      </TouchableOpacity>

      <View style={[styles.box, { backgroundColor: color }]}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  box: {
    width: 200,
    height: 200,
    marginTop: 20,
  },

  button: {
    padding: 10,
    margin: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ddd",
  },
});

export default Index;
