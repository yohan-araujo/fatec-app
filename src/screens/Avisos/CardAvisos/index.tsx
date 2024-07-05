import { Divider, Text, VStack } from "native-base";
import { IVStackProps } from "native-base/lib/typescript/components/primitives/Stack/VStack";

export default function CardAvisos({ ...rest }: IVStackProps) {
  return (
    <VStack
      w={"95%"}
      h={120}
      bgColor={"rgb(178,0,0)"}
      rounded={"3xl"}
      p={3}
      borderWidth={4}
      borderColor={"#842519"}
      {...rest}
    >
      <Text color={"white"} fontSize={18} fontWeight={"bold"}>
        Ausência de Professor
      </Text>
      <Divider bgColor={"white"} />
      <Text color={"white"} fontSize={16} my={1}>
        Professor X
      </Text>
      <Divider bgColor={"white"} />
      <Text color={"white"} fontSize={16} mt={1}>
        Banco de dados - 19:00 - 20:50
      </Text>
    </VStack>
  );
}
