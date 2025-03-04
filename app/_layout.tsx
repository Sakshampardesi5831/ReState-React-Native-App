import { SplashScreen, Stack } from "expo-router";
import "./global.css";
import { useFonts } from 'expo-font';
import { useEffect } from "react";
export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Rubik-Regular': require('../assets/fonts/Rubik-Regular.ttf'),
    'Rubik-Bold': require('../assets/fonts/Rubik-Bold.ttf'),
    'Rubik-Medium': require('../assets/fonts/Rubik-Medium.ttf'),
    'Rubik-Light': require('../assets/fonts/Rubik-Light.ttf'),
    "Rubik-Semibold": require('../assets/fonts/Rubik-SemiBold.ttf'),
    "Rubik-ExtraBold": require('../assets/fonts/Rubik-ExtraBold.ttf'),
    
  });
  useEffect(()=>{
    if(fontsLoaded){
      console.log("Fonts Loaded")
      SplashScreen.hideAsync()
    }
  },[fontsLoaded])
  if (!fontsLoaded) {
    return null;
  }
  return <Stack screenOptions={{ headerShown: false }} />;
}
