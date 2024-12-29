import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
import { login } from "@/lib/appwrite";

const SignIn = () => {
  const handleGoogleSignIn = async  () => {
    const result=await login();
    if(result){
      console.log("result is ",result);
    }else{
      Alert.alert("error","Failed to login");
    }
  };
  console.log("signin page is here ");
  return (
    <SafeAreaView>
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="w-full h-4/6"
          resizeMode="contain"
        />
        <View className="px-10">
          <Text className="text-base text-center uppercase font-rubik text-black-200 mt-2">
            Welcome to ReState
          </Text>
          <Text className="text-3xl  font-rubikBold text-black-200 text-center mt-2">
            Let's Get You Closer {"\n"}
            <Text className="text-primary-300">Your Ideal Home</Text>
          </Text>
          <Text className="text-lg font-rubik text-black-200 text-center mt-12">
            Login to Restate with Google
          </Text>
          <TouchableOpacity
            onPress={() => handleGoogleSignIn()}
            className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5 "
          >
            <View className="flex flex-row items-center justify-center ">
              <Image
                source={icons.google}
                className="w-5 h-5"
                resizeMode="contain"
              />
              <Text className="text-lg font-rubikBold text-black-200 ml-2">
                Sign in with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
