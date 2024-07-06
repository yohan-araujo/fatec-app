import { HStack, Text, Pressable } from "native-base";

export default function SelectDiaSemana({ diaSelecionado, setDiaSelecionado }) {
  const dias = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];

  return (
    <HStack
      justifyContent={"space-between"}
      py={3}
      px={4}
      mt={8}
      rounded={"md"}
      borderWidth={2}
      borderColor={"rgb(178,0,0)"}
    >
      {dias.map((dia, index) => (
        <Pressable
          key={index}
          onPress={() => setDiaSelecionado(dia)}
          bgColor={"rgb(178,0,0)"}
          w={8}
          h={8}
          rounded={"3xl"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text
            fontSize={16}
            fontWeight={"bold"}
            color={"white"}
            opacity={diaSelecionado === dia ? "100" : "60"}
          >
            {dia[0]}
          </Text>
        </Pressable>
      ))}
    </HStack>
  );
}
