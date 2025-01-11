import {
  Text,
  View,
  Appearance,
  StyleSheet,
  Platform,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { menuItems } from "@/constants/menuItems";
import menuImages from "@/constants/menuImages";
import { Image } from "react-native";

export default function MenuScreen() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  const styles = createStyles(theme, colorScheme);
  const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;
  const footerComp = (
    <View className="bg-black/50 rounded my-3">
      <Text className="text-center text-white py-2">End of Menu</Text>
    </View>
  );
  const headerComp = (
    <View className="bg-black/50 rounded my-3">
      <Text className="text-center text-white py-2">Start of Menu</Text>
    </View>
  );
  return (
    <>
      <Container className="px-2 pb-3" style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={footerComp}
          ListHeaderComponent={headerComp}
          renderItem={({ item }) => (
            <View>
              <View>
                <Text style={styles.text}> {item.title} </Text>
                <Text style={styles.text}> {item.description} </Text>
              </View>
              <Image
                source={menuImages[item.id - 1]}
                resizeMode="cover"
                className="mb-5 rounded-xl"
                style={styles.image}
              />
              <View style={styles.seperator} />
            </View>
          )}
        />
      </Container>
    </>
  );
}

function createStyles(theme, colorScheme) {
  return StyleSheet.create({
    image: {
      height: 300,
      width: "100%",
    },
    seperator: {
      width: "100%",
      height: "1px",
      backgroundColor: colorScheme === "dark" ? "payapweep" : "#000",
      marginBottom: "10px",
    },
    container: {
      backgroundColor: theme.background,
    },
    text: {
      color: theme.text,
    }
  });
}
