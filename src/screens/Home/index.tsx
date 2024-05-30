import { Box, Text, VStack } from "native-base";
import FBM from "../../components/FBM";

export default function Home() {
  return (
    <VStack flex={1} p={5}>
      <Text>Home</Text>
      <FBM />
    </VStack>
  );
}
