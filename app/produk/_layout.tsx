import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

export default function ProductNavigator() {
  return (
    <Stack>
      <Stack.Screen name="ListProduct" />
      <Stack.Screen name="DetailProduct" />
      <Stack.Screen name="AddProduct" />
    </Stack>
  );
}
