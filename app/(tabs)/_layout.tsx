import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  return(
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#98D2C0',
        headerStyle: {
          backgroundColor: '#205781',
        },
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: '#205781'
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Peixoto',
          tabBarIcon: ({color, focused}) => (
            <Ionicons name={focused ? 'cash' : 'cash-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'Sobre',
          tabBarIcon: ({color, focused}) => (
            <Ionicons name={focused ? 'body' : 'body-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="toDoList"
        options={{
          title: 'Listinha',
          tabBarIcon: ({color, focused}) => (
            <Ionicons name={focused ? 'checkbox' : 'checkbox-outline'} color={color} size={24} />
          ),
        }}
      />
       <Tabs.Screen
        name="odds"
        options={{
          title: 'Odds',
          tabBarIcon: ({color, focused}) => (
            <Ionicons name={focused ? 'logo-dribbble' : 'logo-dribbble'} color={color} size={24} />
          ),
        }}
      />

    </Tabs>
  );
}
