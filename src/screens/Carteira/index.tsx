import { Box, Button, Image, Text, VStack } from "native-base";
import { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Carteira() {
  const [verso, setVerso] = useState<boolean>(false);

  const imagemFrente = require("../../assets/images/carteirinha/frente.png");
  const imagemVerso = require("../../assets/images/carteirinha/verso.png");

  return (
    <VStack flex={1} p={5}>
      <Text fontWeight={"bold"} color={"rgb(178,0,0)"} fontSize={21}>
        Carteira de identificação
      </Text>
      <Text>Carteira utilizada para identificação do aluno ou professor.</Text>
      <Box mt={4} justifyContent={"center"} alignItems={"center"}>
        <Image
          key={verso ? "verso" : "frente"}
          source={verso ? imagemVerso : imagemFrente}
          alt="carteirinha de identificacao"
        />
      </Box>
      <Box mt={4}>
        <Button
          leftIcon={<Ionicons size={24} name={"repeat"} color={"white"} />}
          bgColor={"rgb(178,0,0)"}
          onPress={() => setVerso((prevVerso) => !prevVerso)}
        >
          {verso ? "Mostrar Frente" : "Mostrar Verso"}
        </Button>
      </Box>
    </VStack>
  );
}
