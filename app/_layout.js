import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { useFonts } from "expo-font";
import { SafeAreaView, Image } from "react-native"; // Import Image from react-native

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "home",
};

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 10 }}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: 'white' },
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen
        name="pages"
          options={{
            headerTitle: () => (
              <Image
                source={require("../assets/icons/logo.png")} 
                style={{ width: 90, height: 40 }} 
              />
            ),
          }}
        />
      </Stack>
    </SafeAreaView>
  );
};

export default Layout;
