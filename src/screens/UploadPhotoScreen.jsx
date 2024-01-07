import { Octicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BackButton, Header, PrimaryButton } from "../components";
import { Colors } from "../constants";
import { hp, wp } from "../utils";

const UploadPhotoScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const [imgUrl, setImgUrl] = useState("");

  const handleCamera = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) return;
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
    });

    if (!result.canceled) {
      handleImageChange(result.assets[0].uri);
    }
  };
  const handleGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
    });

    if (!result.canceled) {
      handleImageChange(result.assets[0].uri);
    }
  };

  const handleImageChange = (localUri) => {
    setImgUrl(localUri);
    console.log(localUri);
  };

  const handleNext = () => {
    try {
      // TODO:store the photo
      navigation.navigate("set_location");
    } catch (error) {}
  };

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <Header />
      <BackButton
        title={"Upload Your Photo Profile"}
        subtitle={
          "This data will be displayed in your account profile for security"
        }
      />

      <View style={styles.bodyContainer}>
        {imgUrl ? (
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: imgUrl }}
              style={styles.photo}
              contentFit="cover"
            />
            <TouchableOpacity
              style={styles.crossButton}
              onPress={() => setImgUrl("")}
            >
              <Octicons name="x" size={24} color={Colors.white} />
            </TouchableOpacity>
          </View>
        ) : (
          <>
            <TouchableOpacity
              style={styles.methodContainer}
              onPress={handleGallery}
            >
              <Image
                source={require("../../assets/images/Gallery.png")}
                style={styles.imageMethod}
                contentFit="contain"
              />
              <Text style={styles.methodText}>From Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.methodContainer}
              onPress={handleCamera}
            >
              <Image
                source={require("../../assets/images/camera.png")}
                style={styles.imageMethod}
                contentFit="contain"
              />
              <Text style={styles.methodText}>From Camera</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
      <PrimaryButton
        text={"Next"}
        onPress={handleNext}
        styles={{ marginBottom: hp(2) }}
        disabled={imgUrl.trim().length <= 0}
      />
    </ScrollView>
  );
};

export default UploadPhotoScreen;

const styles = StyleSheet.create({
  methodText: {
    fontFamily: "bold",
    fontSize: wp(4),
  },
  methodContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
    borderRadius: wp(4),
    height: hp(18),
    gap: hp(2),
    marginVertical: hp(2),
    elevation: 1,
  },
  crossButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: Colors.light_white,
    opacity: 0.5,
    padding: wp(1),
    borderRadius: wp(100),
    width: wp(10),
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  photo: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: wp(80),
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: hp(5),
    overflow: "hidden",
    borderRadius: wp(5),
  },
  bodyContainer: {
    paddingHorizontal: wp(4),
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: hp(1),
    paddingTop: hp(8),
  },
  screen: {
    flex: 1,
    backgroundColor: Colors.light_white,
  },
  imageMethod: { aspectRatio: 1, height: hp(10) },
});
