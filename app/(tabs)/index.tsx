import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Color = () => {
  const [colors, setColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState("gray");
  const [error, setError] = React.useState<string | null>(null);

  const fetchColors = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/colors");
      const data = await response.data;
      setColors(data.colors);
    } catch (error) {
      setError("Error fetching colors");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchColors();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={colors}
        keyExtractor={(item) => item.label}
        renderItem={({ item }) => (
          <View style={{ margin: 5 }}>
            <TouchableOpacity
              style={[styles.colorButton, { backgroundColor: item.value }]}
              onPress={() => setSelectedColor(item.value)}
            >
              <Text style={styles.buttonText}>{item.label}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <View style={[styles.box, { backgroundColor: selectedColor }]}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  colorButton: {
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  box: {
    width: 200,
    height: 200,
    marginBottom: 50,
  },
});

export default Color;
