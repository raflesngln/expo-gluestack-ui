import { Button, Text, View } from "react-native";
import { useNavigation } from "expo-router";

export default function Modal() {
  const navigation = useNavigation();

  const openAddJob = () => {
    navigation.navigate("addJob");
  };

  const openDetailJob = () => {
    navigation.navigate("detailJob");
  };

  return (
    <View className="flex-1">
      <Text className="text-3xl font-bold mb-[30px]">JOBS</Text>
      <View>
        <Text className="text-red-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
          tenetur ea commodi laborum perferendis placeat cumque voluptatibus,
          autem laudantium accusamus recusandae eveniet accusantium quaerat
          labore, id soluta nemo rem neque.
        </Text>
        <Button title="Add Job" onPress={openAddJob} />
        <Button title="Detail Job" onPress={openDetailJob} />
      </View>
    </View>
  );
}
