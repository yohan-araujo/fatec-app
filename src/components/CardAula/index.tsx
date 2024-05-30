import {
  Actionsheet,
  Box,
  Button,
  HStack,
  Text,
  useDisclose,
  VStack,
} from "native-base";

export default function CardAula() {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <Box
      w={48}
      borderWidth={2}
      borderColor={"rgb(178,0,0)"}
      rounded={"md"}
      bgColor={"#bfbfbf"}
    >
      <VStack p={3}>
        <Text fontSize={18} fontWeight={"bold"} textAlign={"center"}>
          Aula
        </Text>
        <Text fontSize={16} textAlign={"center"}>
          Professor
        </Text>

        <Text fontSize={16} textAlign={"center"}>
          00:00-00:00
        </Text>

        <Button
          variant="solid"
          rounded="md"
          bgColor={"white"}
          justifyContent={"center"}
          mt={2}
          onPress={onOpen}
        >
          <Text
            color={"rgb(178,0,0)"}
            textTransform={"uppercase"}
            fontWeight={"bold"}
          >
            Faltas
          </Text>
        </Button>
        <Button
          variant="solid"
          rounded="md"
          bgColor={"white"}
          justifyContent={"center"}
          mt={2}
        >
          <Text
            color={"rgb(178,0,0)"}
            textTransform={"uppercase"}
            fontWeight={"bold"}
          >
            Ementa
          </Text>
        </Button>
        <Button
          variant="solid"
          rounded="md"
          bgColor={"white"}
          justifyContent={"center"}
          mt={2}
        >
          <Text
            color={"rgb(178,0,0)"}
            textTransform={"uppercase"}
            fontWeight={"bold"}
          >
            Conteudo
          </Text>
        </Button>
      </VStack>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Actionsheet.Item
            _text={{
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
          >
            Faltas:
          </Actionsheet.Item>

          <Actionsheet.Item>10/02 - 19:30</Actionsheet.Item>
          <Actionsheet.Item>10/02 - 19:30</Actionsheet.Item>
          <Actionsheet.Item>10/02 - 19:30</Actionsheet.Item>
          <Actionsheet.Item>Avisos</Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </Box>
  );
}
