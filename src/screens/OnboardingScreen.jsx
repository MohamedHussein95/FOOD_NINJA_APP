import { Image } from "expo-image";
import React, { useRef, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Colors } from ".././constants";
import { PrimaryButton } from "../components";
import { DEVICE_WIDTH, hp, wp } from "../utils";

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
      <Image source={image} contentFit="contain" style={styles.slideImage} />
      <View style={styles.titleWrapper}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
      </View>
      <View style={styles.descWrapper}>
        <Text style={styles.description} numberOfLines={2}>
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
        style={styles.flatlist}
        contentContainerStyle={styles.contentContainer}
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

      <PrimaryButton
        text={"Next"}
        onPress={goToNextSlide}
        styles={styles.primaryButton}
      />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  primaryButton: {
    marginBottom: hp(2),
  },
  flatlist: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    paddingVertical: hp(1),
    alignItems: "center",
    justifyContent: "center",
  },
  description: {
    fontFamily: "regular",
    fontSize: wp(4),
    textAlign: "center",
    lineHeight: hp(3),
  },
  descWrapper: {
    width: "65%",
    alignItems: "center",
    gap: hp(3),
    marginTop: hp(2),
  },
  title: {
    fontFamily: "bold",
    fontSize: wp(7),
    textAlign: "center",
    lineHeight: hp(5),
  },
  titleWrapper: {
    width: "90%",
    alignItems: "center",
    gap: hp(3),
    marginTop: hp(2),
  },
  slideImage: {
    width: "100%",
    height: hp(55),
  },
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
