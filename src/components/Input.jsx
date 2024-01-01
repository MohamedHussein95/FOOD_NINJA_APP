import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../constants";
import { hp, wp } from "../utils";

const Input = ({
  IconPack,
  icon,
  iconRight,
  active,
  color,
  containerStyle,
  touched,
  errors,
  onPressIconRight,
  onPressIconLeft,
  image,
  ...props
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View
        style={[
          styles.inputContainer,
          {
            backgroundColor: active
              ? Colors.backgroundPrimary
              : !errors && touched
              ? Colors.backgroundPrimary
              : Colors.white,
            borderColor: active
              ? Colors.success
              : errors && touched
              ? Colors.red
              : !errors && touched
              ? Colors.success
              : Colors.greyScale200,
            borderWidth: 1,
          },
        ]}
      >
        {IconPack ? (
          <IconPack
            name={icon}
            size={wp(6)}
            color={
              active
                ? Colors.primary
                : errors && touched
                ? Colors.danger
                : !errors && touched
                ? Colors.primary
                : Colors.greyScale400
            }
          />
        ) : image ? (
          <Image
            source={image}
            resizeMode="contain"
            style={{ width: wp(7), aspectRatio: 1 }}
          />
        ) : null}
        <TextInput
          {...props}
          style={[
            styles.inputs,
            {
              color: active ? Colors.black : Colors.holder_text,
              fontFamily: "regular",
            },
          ]}
          placeholderTextColor={Colors.greyScale300}
          cursorColor={Colors.primary400}
        />
        {IconPack && (
          <IconPack
            name={iconRight}
            size={wp(6)}
            color={
              active
                ? Colors.primary
                : errors && touched
                ? Colors.danger
                : !errors && touched
                ? Colors.primary
                : Colors.greyScale400
            }
            onPress={onPressIconRight}
          />
        )}
      </View>

      {errors && touched && (
        <View style={[styles.errorContainer]}>
          <Text style={[styles.errorText]}>{errors}</Text>
        </View>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputs: {
    flex: 1,
    fontFamily: "regular",
    fontSize: wp(4),
  },
  inputContainer: {
    padding: wp(3),
    height: hp(8),
    borderRadius: wp(4),
    flexDirection: "row",
    alignItems: "center",
    gap: wp(3),
    elevation: 0.2,
    shadowColor: Colors.primary400,
    shadowOpacity: 0.3,
    shadowRadius: wp(4),
    shadowOffset: {
      width: 0.3,
      height: 0.3,
    },
  },
  container: {
    width: "100%",
    gap: hp(1),
    alignSelf: "center",
  },
  errorText: { color: Colors.red },
  errorContainer: { width: "100%" },
});
