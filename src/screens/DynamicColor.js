import React from "react";
import { View, Button } from "react-native";
import { showMessage } from "react-native-flash-message";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const DynamicColor = ({}) => {
  const navigation = useNavigation();
  return (
    <View className="bg-slate-300 rounded-full m-3  ">
      <Button
        title="Add Color"
        onPress={() => {
          navigation.navigate("AddColor");
        }}
      />
    </View>
  );
};

export default DynamicColor;
