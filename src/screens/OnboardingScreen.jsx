import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { Colors } from ".././constants";
import { DEVICE_WIDTH, hp, wp } from "../utils";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../constants/colors";

const ITEMS = [
  {
    id: 1,
    title: "Find Your Comfort Food Here",
    description:
      "Here You Can find a chef or dish for every taste and color. Enjoy!",
    image: require("../../assets/images/Illustartion1.png"),
  },
  {
    id: 2,
    title: "Food Ninja is Where Your Comfort Food Lives",
    description: "Enjoy a fast and smooth food delivery at your doorstep",
    image: require("../../assets/images/Illustration2.png"),
  },
];

const SlideComponent = ({ title, description, image }) => {
  return (
    <View style={styles.container}>
      <Image
        source={image}
        resizeMode="cover"
        style={{ width: "100%", height: hp(55) }}
      />
      <View
        style={{
          paddingHorizontal: wp(5),
          alignItems: "center",
          gap: hp(3),
          marginTop: hp(2),
        }}
      >
        <Text
          style={{
            fontFamily: "black",
            fontSize: hp(4),
            textAlign: "center",
            lineHeight: hp(5),
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontFamily: "regular",
            fontSize: hp(2.5),
            textAlign: "center",
            lineHeight: hp(3.5),
          }}
        >
          {description}
        </Text>
      </View>
    </View>
  );
};

const OnboardingScreen = ({ navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const flatlistRef = useRef();

  const updateCurrentSlideIndex = (event) => {
    const currentIndex = Math.round(
      event.nativeEvent.contentOffset.x / DEVICE_WIDTH
    );
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex < ITEMS.length) {
      flatlistRef.current.scrollToOffset({
        offset: nextSlideIndex * DEVICE_WIDTH,
      });
      setCurrentSlideIndex(nextSlideIndex);
    } else if (currentSlideIndex === ITEMS.length - 1) {
      navigation.replace("signIn");
    }
  };
  return (
    <View style={styles.screen}>
      <FlatList
        ref={flatlistRef}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        pagingEnabled
        data={ITEMS}
        keyExtractor={(item) => item.id.toString()}
        style={{ flex: 1 }}
        contentContainerStyle={{
          flexGrow: 1,
          paddingVertical: hp(1),
          alignItems: "center",
          justifyContent: "center",
        }}
        horizontal
        renderItem={({ item }) => (
          <SlideComponent
            title={item.title}
            description={item.description}
            image={item.image}
          />
        )}
        showsHorizontalScrollIndicator={false}
      />

      <TouchableOpacity activeOpacity={0.8} onPress={goToNextSlide}>
        <LinearGradient
          colors={colors.green_gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: wp(35),
            height: hp(7),
            marginBottom: hp(5),
            padding: wp(3),
            borderRadius: wp(3),
            overflow: "hidden",
          }}
        >
          <Text
            style={{
              fontFamily: "bold",
              fontSize: hp(3),
              color: Colors.white,
            }}
          >
            Next
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  container: {
    width: DEVICE_WIDTH,
    justifyContent: "center",
    alignItems: "center",
  },
});
