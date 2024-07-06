import { useState } from "react";
import { Avatar, Box, Button, HStack, Switch, Text, VStack } from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import CardAula from "../../components/CardAula";
import SelectDiaSemana from "./SelectDiaSemana";

export default function Perfil({ navigation }) {
  const [diaSelecionado, setDiaSelecionado] = useState("Segunda");

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

      <SelectDiaSemana
        diaSelecionado={diaSelecionado}
        setDiaSelecionado={setDiaSelecionado}
      />

      <Box mt={8}>
        <CardAula diaSelecionado={diaSelecionado} />
      </Box>
    </VStack>
  );
}
