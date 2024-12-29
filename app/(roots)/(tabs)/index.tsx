import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className=" my-2 text-blue-400 font-rubik text-3xl" > Welcome to  Home Screen Restate</Text>
      <Link href="/sign-in" className="text-3xl">Sign In</Link>
      <Link href="/properties/1">Property 1</Link>
    </View>
  );
}
