import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Modal, Text, Pressable, View, TextInput } from "react-native";
import PropTypes from "prop-types";

const UpdateColor = forwardRef((props, ref) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [colorData, setColorData] = useState({ id: "", label: "", value: "" });

  useImperativeHandle(ref, () => ({
    setModal,
  }));

  const setModal = (data) => {
    setColorData(data);
    setModalVisible(true);
  };

  const handleUpdate = () => {
    props.onUpdate(colorData);
    setModalVisible(false);
  };

  return (
    <View className="flex-1 justify-center items-center mt-6">
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View className="flex-1 justify-center items-center mt-6">
          <View className="m-5 bg-white rounded-2xl p-8 items-center shadow-md shadow-black">
            <Text className="mb-4 text-center text-lg font-bold">
              Update Color
            </Text>
            <TextInput
              className="h-10 border border-gray-300 w-48 mb-2 px-2"
              placeholder="Label"
              value={colorData.label}
              onChangeText={(text) =>
                setColorData({ ...colorData, label: text })
              }
            />
            <TextInput
              className="h-10 border border-gray-300 w-48 mb-2 px-2"
              placeholder="Value"
              value={colorData.value}
              onChangeText={(text) =>
                setColorData({ ...colorData, value: text })
              }
            />
            <Pressable
              className="rounded-2xl p-2 bg-blue-500 mt-2"
              onPress={handleUpdate}
            >
              <Text className="text-white font-bold text-center">Update</Text>
            </Pressable>
            <Pressable
              className="rounded-2xl p-2 bg-blue-500 mt-2"
              onPress={() => setModalVisible(false)}
            >
              <Text className="text-white font-bold text-center">Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
});

UpdateColor.propTypes = {
  onUpdate: PropTypes.func.isRequired,
};

export default UpdateColor;
