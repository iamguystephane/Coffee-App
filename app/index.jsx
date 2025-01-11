import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Pressable,
} from "react-native";
import coffee from "@/assets/images/coffee.jpg";
import { Link } from "expo-router";

const HomePage = () => {
  return (
    <View className="w-full h-full flex items-center justify-center bg-white">
      <ImageBackground
        resizeMode="cover"
        source={coffee}
        className="w-full h-full flex justify-center"
        style={styles.image}
      >
        <Text className="text-white text-center text-3xl font-bold bg-black py-2">
          Coffee Shop
        </Text>
        <Link href="/contact" className="mx-auto my-10" asChild>
          <Pressable className="rounded bg-black/50 w-32 px-5 py-2">
            <Text className="text-white text-center">Contact us</Text>
          </Pressable>
        </Link>
        <Link href="/menu" className="mx-auto my-10" asChild>
          <Pressable className="rounded bg-black/50 w-32 px-5 py-2">
            <Text className="text-white text-center">Shop Menu</Text>
          </Pressable>
        </Link>
      </ImageBackground>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%",
  },
});