import { create } from "zustand";
import axios from "axios";
import { showMessage } from "react-native-flash-message";
import { config } from "../Config/config";

const useColorStore = create((set) => ({
  colors: [],
  fetchColors: async () => {
    try {
      const response = await axios.get(`${config.API_URL}/api/colors/`);
      set({ colors: response.data.colors });
    } catch (error) {
      console.error("Error fetching colors:", error);
      showMessage({
        message: "Error",
        description: "Failed to fetch colors",
        type: "danger",
      });
    }
  },
  addColor: async (data) => {
    try {
      const response = await axios.post(`${config.API_URL}/api/colors`, data);
      set((state) => ({ colors: [...state.colors, response.data.color] }));
      showMessage({
        message: "Success",
        description: "Color added successfully",
        type: "success",
      });
    } catch (error) {
      console.error("Error adding color:", error);
      showMessage({
        message: "Error",
        description: "Failed to add color",
        type: "danger",
      });
    }
  },
  deleteColor: async (id) => {
    try {
      await axios.delete(`${config.API_URL}/api/colors/${id}`);
      set((state) => ({
        colors: state.colors.filter((color) => color.id !== id),
      }));
      showMessage({
        message: "Success",
        description: "Color deleted successfully",
        type: "success",
      });
    } catch (error) {
      console.error("Error deleting color:", error);
      showMessage({
        message: "Error",
        description: "Failed to delete color",
        type: "danger",
      });
    }
  },
  updateColor: async (data) => {
    try {
      const { id } = data;
      const response = await axios.put(
        `${config.API_URL}/api/colors/${id}`,
        data
      );
      set((state) => ({
        colors: state.colors.map((color) =>
          color.id === id ? response.data.color : color
        ),
      }));
      showMessage({
        message: "Success",
        description: "Color updated successfully",
        type: "success",
      });
    } catch (error) {
      console.error("Error updating color:", error);
      showMessage({
        message: "Error",
        description: "Failed to update color",
        type: "danger",
      });
    }
  },
}));

export default useColorStore;
