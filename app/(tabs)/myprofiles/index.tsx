import { Button, Text, View } from "react-native";
import { useNavigation } from "expo-router";

export default function Modal() {
  const navigation = useNavigation();


  const openHistory = () => {
    // navigation.navigate("modal");
    navigation.navigate("history");
  };

  const changePassword = () => {
    navigation.navigate("profile-screen");
  };

  const changePhotoScreen = () => {
    // navigation.navigate("modal");
    navigation.navigate("profile-screen");
  };

  return (
    <View className="flex-1">
      <Text className="text-3xl font-bold mb-[30px]">MY PROFILE</Text>
      <View>
        <Text className="text-red-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
          tenetur ea commodi laborum perferendis placeat cumque voluptatibus,
          autem laudantium accusamus recusandae eveniet accusantium quaerat
          labore, id soluta nemo rem neque.
        </Text>
        <Button title="History" onPress={openHistory} />
        <Button title="changePassword" onPress={changePassword} />
        <Button title="changePhoto" onPress={changePhotoScreen} />
      </View>
    </View>
  );
}
