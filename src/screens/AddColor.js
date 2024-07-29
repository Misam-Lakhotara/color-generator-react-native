import { useForm, Controller } from "react-hook-form";
import { ColorPicker } from "react-native-color-picker";
import Slider from "@react-native-community/slider";
import React, { useEffect, useRef } from "react";
import { View, Text, Button, TextInput } from "react-native";
import useColorStore from "../components/Stores/ColorStores";

export default function AddColor({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      colorName: "",
    },
  });

  const colorRef = useRef("#ffffff");
  const colorStore = useColorStore();

  const onSubmit = (data) => {
    const handleAddData = {
      label: data.colorName,
      value: colorRef.current,
    };
    colorStore
      .addColor(handleAddData)
      .then(() => {
        navigation.goBack();
        colorStore.fetchColors();
        reset();
      })
      .catch((error) => {
        console.error("Error submitting color:", error);
      });
  };

  return (
    <View className="flex items-center justify-center m-11 box-border border border-gray-500">
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="box-border border-2 border-gray-500 m-3 p-3 rounded-full"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Color Name"
          />
        )}
        name="colorName"
      />
      {errors.colorName && <Text>Please add a color name</Text>}

      <Text className="box-border border-2 border-gray-500 m-3 p-3 rounded-full">
        Pick a Color:
      </Text>
      <ColorPicker
        onColorSelected={(selectedColor) => {
          colorRef.current = selectedColor;
        }}
        className="h-40 w-40 m-3"
        sliderComponent={Slider}
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
