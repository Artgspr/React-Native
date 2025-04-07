import { Stack } from "expo-router";

export default function RootLayout() {

  
  return (
    <>  
      <Stack
      screenOptions={{
        headerStyle: {
        backgroundColor: '#205781',
        },
        headerShadowVisible: false,
        headerTintColor: '#fff',
      }}
    >
        <Stack.Screen name="(tabs)" options={{headerShown: false}} />
        <Stack.Screen name="+not-found"/>
      </Stack>
    </>
  );
}
