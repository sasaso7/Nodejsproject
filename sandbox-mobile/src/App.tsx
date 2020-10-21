import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Pink } from "./Constants";
import { DocumentStackScreen } from "./Screens/DocumentStack";
import { HomeScreen } from "./Screens/HomeScreen";
import { ImageEntry } from "./Screens/ImagesScreen";
import { ImageStackScreen } from "./Screens/ImageStack";
import { AudioEntry } from "./Screens/AudioScreen";
import { AudioStackScreen } from "./Screens/AudioStack";
import { DocEntry } from "./Screens/DocumentsScreen";

function iconResolver(route: string) {
  switch (route) {
    // case 'Home': return focused ? 'ios-information-circle' : 'ios-information-circle-outline';
    case "Home":
      return "ios-infinite";
    case "Images":
      return "ios-images";
    case "Documents":
      return "ios-document";
      case "Audio":
      return "ios-document";
    default:
      return "ios-document";
  }
}

// Screen parameters
export type ScreenParamList = {
  // Images stack screens
  Images: undefined;
  ImageDetails: { item: ImageEntry };
  // Documents stack screens
  Documents: undefined;
  DocumentDetails: { item: DocEntry };
  //Audio stack screens
  Audio: undefined;
  AudioDetails: { item: AudioEntry };
};

// Tab Bar
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName = iconResolver(route.name);
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: Pink,
          inactiveTintColor: "black",
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Images" component={ImageStackScreen} />
        <Tab.Screen name="Documents" component={DocumentStackScreen} />
        <Tab.Screen name="Audio" component={AudioStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
