import { View, Text, Pressable } from "react-native";
import { Link } from 'expo-router'

const Explore = () => {
  return (
    <>
      <View className="h-full w-full flex justify-center bg-red-200">
        <Text className="text-white bg-black/50 w-full text-center py-2 text-bold text-3xl">
          Coffee shop info
        </Text>
        <Link href='/' asChild>
          <Pressable className="bg-black/50 p-2 w-32 rounded text-white mx-auto my-10">
            <Text className='text-white text-bold text-center'> Back to Homepage </Text>
          </Pressable>
        </Link>
      </View>
    </>
  );
};

export default Explore;
