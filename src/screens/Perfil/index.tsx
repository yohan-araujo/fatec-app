import { Avatar, Box, Button, HStack, Switch, Text, VStack } from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import CardAula from "../../components/CardAula";

export default function Perfil({ navigation }) {
  return (
    <VStack flex={1} p={5}>
      <HStack space={3}>
        <Avatar size={"xl"} />
        <HStack justifyContent={"center"} alignItems={"center"} space={6}>
          <VStack>
            <Text>Nome do aluno</Text>
            <Text>RA: 00000000</Text>
            <Text>Curso: ADS</Text>
            <Text>Data/Hora</Text>
          </VStack>

          <VStack justifyContent={"center"} alignItems={"center"}>
            <HStack justifyContent={"center"} alignItems={"center"} space={1}>
              <Ionicons size={32} name="sunny" />
              <Switch colorScheme={"rgb(178,0,0)"} />
              <Ionicons size={32} name="moon" />
            </HStack>
            <HStack>
              <Button
                variant="solid"
                rounded="full"
                onPress={() => {
                  navigation.navigate("Login");
                }}
                leftIcon={<Ionicons size={24} name={"exit"} color={"white"} />}
                bgColor={"rgb(178,0,0)"}
                mb={4}
                justifyContent={"start"}
              >
                <Text
                  color={"white"}
                  textTransform={"uppercase"}
                  fontWeight={"bold"}
                >
                  Sair
                </Text>
              </Button>
            </HStack>
          </VStack>
        </HStack>
      </HStack>

      <HStack
        bgColor={"#bfbfbf"}
        justifyContent={"space-between"}
        py={3}
        px={4}
        mt={8}
        rounded={"md"}
      >
        <Text fontSize={16} fontWeight={"bold"} opacity={"20"}>
          S
        </Text>
        <Text fontSize={16} fontWeight={"bold"}>
          T
        </Text>
        <Text fontSize={16} fontWeight={"bold"} opacity={"20"}>
          Q
        </Text>
        <Text fontSize={16} fontWeight={"bold"} opacity={"20"}>
          Qi
        </Text>
        <Text fontSize={16} fontWeight={"bold"} opacity={"20"}>
          Se
        </Text>
      </HStack>
      <Box mt={8}>
        <CardAula />
      </Box>
    </VStack>
  );
}
