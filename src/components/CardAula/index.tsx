import {
  Actionsheet,
  Avatar,
  Box,
  Button,
  HStack,
  Text,
  useDisclose,
  VStack,
} from "native-base";

export default function CardAula({ diaSelecionado }) {
  const { isOpen, onOpen, onClose } = useDisclose();

  const aulas = {
    Segunda: {
      disciplina: "Laboratorio de banco de dados",
      professor: "Rodrigo Dionisio",
      horario: "00:00-00:00",
    },
    Terça: {
      disciplina: "Programação Web",
      professor: "Maria Silva",
      horario: "10:00-12:00",
    },
    Quarta: {
      disciplina: "História",
      professor: "Maria Silva",
      horario: "10:00-12:00",
    },
    Quinta: {
      disciplina: "Português",
      professor: "Maria Silva",
      horario: "10:00-12:00",
    },
    Sexta: {
      disciplina: "Matemática",
      professor: "Maria Silva",
      horario: "10:00-12:00",
    },
  };

  const aula = aulas[diaSelecionado];

  return (
    <Box borderWidth={2} borderColor={"rgb(178,0,0)"} rounded={"md"}>
      <VStack p={3}>
        <HStack
          justifyContent={"center"}
          alignItems={"center"}
          space={3}
          px={6}
        >
          <Avatar size={"lg"} />
          <Text
            fontSize={18}
            fontWeight={"bold"}
            textAlign={"center"}
            color={"rgb(178,0,0)"}
          >
            {aula.disciplina}
          </Text>
        </HStack>
        <Text fontSize={16} textAlign={"center"}>
          {aula.professor}
        </Text>

        <Text fontSize={16} textAlign={"center"}>
          {aula.horario}
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
