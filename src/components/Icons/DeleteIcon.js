import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";

const DeleteIcon = () => {
  return (
    <View className="absolute -top-2 -right-3 z-50 flex items-center justify-center">
      <AntDesign name="delete" />
    </View>
  );
};

export default DeleteIcon;
