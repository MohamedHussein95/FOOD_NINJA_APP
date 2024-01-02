import { Dimensions } from "react-native";
import * as secureStore from "expo-secure-store";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

export { wp, hp, DEVICE_HEIGHT, DEVICE_WIDTH };

export const hideCharacters = (text, position) => {
  if (typeof text !== "string" || text.length === 0) {
    // Invalid input, return the original text
    return text;
  }

  const textLength = text.length;
  const hideChars = Math.max(
    2,
    Math.min(textLength - 3, Math.floor(textLength / 3))
  ); // Calculate the number of characters to hide

  switch (position) {
    case "start":
      const hiddenCharsStart = "•".repeat(hideChars);
      return `${hiddenCharsStart}${text.substring(hideChars)}`;

    case "middle":
      const startChars = Math.floor((textLength - hideChars) / 3);
      const endChars = textLength - startChars - hideChars;
      const hiddenCharsMiddle = "•".repeat(hideChars);
      return `${text.substring(
        0,
        startChars
      )}${hiddenCharsMiddle}${text.substring(textLength - endChars)}`;

    case "end":
      const hiddenCharsEnd = "•".repeat(hideChars);
      return `${text.substring(0, textLength - hideChars)}${hiddenCharsEnd}`;

    default:
      // Invalid position, return the original text
      return text;
  }
};

export const capitalizeWords = (str) => {
  return str
    .trim()
    .toLowerCase()
    .replace(/(^|\s)\S/g, (char) => char.toUpperCase());
};

export const saveSecurely = async (keyValuePairs) => {
  try {
    for (const pair of keyValuePairs) {
      if (pair.key && pair.value !== undefined) {
        await secureStore.setItemAsync(pair.key, pair.value);
      }
    }
  } catch (error) {
    console.error("Error saving values securely:", error);
  }
};

export const getStoredValues = async (keys) => {
  const values = {};

  try {
    for (const key of keys) {
      values[key] = await secureStore.getItemAsync(key);
    }
  } catch (error) {
    console.error("Error retrieving stored values:", error);
  }

  return values;
};

export const deleteStoredValues = async (keys) => {
  try {
    for (const key of keys) {
      await secureStore.deleteItemAsync(key);
    }
  } catch (error) {
    console.error("Error deleting stored values:", error);
  }
};
