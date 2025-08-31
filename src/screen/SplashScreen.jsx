import { View, Text, StyleSheet } from "react-native";
import React from "react";
import FoodLogo from "../../assets/logos/FoodLogo";
import FoodFooter from "../../assets/logos/FoodFooter";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <FoodLogo />
      <FoodFooter style={styles.footerLogo} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",

    alignItems: "center",
  },
  footerLogo: {
    position: "absolute",
    bottom: 0,
    right: -117,
  },
});
