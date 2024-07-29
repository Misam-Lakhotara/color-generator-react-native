import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import DynamicColor from "./DynamicColor";
import useColorStore from "../components/Stores/ColorStores";
import DeleteIcon from "../components/Icons/DeleteIcon";
import EditIcon from "../components/Icons/EditIcon";
import UpdateColor from "./UpdateColor";

const Color = () => {
  const [selectedColor, setSelectedColor] = useState("gray");
  const colorStore = useColorStore();
  const updateColorRef = useRef();

  useEffect(() => {
    colorStore.fetchColors();
  }, []);

  const handleDelete = async (id) => {
    await colorStore.deleteColor(id);
    colorStore.fetchColors();
  };

  const handleUpdate = async (data) => {
    await colorStore.updateColor(data);
    colorStore.fetchColors();
  };

  return (
    <View className="flex-1 flex items-center justify-center m-2">
      <DynamicColor />
      <UpdateColor ref={updateColorRef} onUpdate={handleUpdate} />
      <FlatList
        data={colorStore.colors}
        keyExtractor={(item) => item?.label || item?.id}
        renderItem={({ item }) =>
          item ? (
            <View className="m-2">
              <TouchableOpacity
                className="p-2 rounded-lg items-center justify-between flex-row space-x-2"
                style={{ backgroundColor: item.value }}
                onPress={() => setSelectedColor(item.value)}
              >
                <Text className="font-bold">{item.label}</Text>
                <TouchableOpacity onPress={() => handleDelete(item.id)}>
                  <DeleteIcon />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => updateColorRef.current.setModal(item)}
                >
                  <EditIcon />
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
          ) : null
        }
      />
      <View
        className="w-36 h-36 flex items-center justify-center mb-7 rounded-md border"
        style={{ backgroundColor: selectedColor }}
      />
    </View>
  );
};

export default Color;
