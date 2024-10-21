import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

export default function ProductNavigator() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Job",
        }}
      />
      <Stack.Screen
        name="detailJob"
        options={{
          title: "Detail Job",
        }}
      />
      <Stack.Screen
        name="addJob"
        options={{
          title: "Add Job",
        }}
      />
    </Stack>
  );
}
