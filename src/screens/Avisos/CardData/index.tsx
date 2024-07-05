import { Divider, Text, VStack } from "native-base";
import { IVStackProps } from "native-base/lib/typescript/components/primitives/Stack/VStack";

export default function CardData({ ...rest }: IVStackProps) {
  return (
    <VStack
      p={5}
      bgColor={"white"}
      {...rest}
      rounded={"3xl"}
      borderWidth={2}
      borderColor={"rgb(178,0,0)"}
    >
      <Text
        textAlign={"center"}
        fontSize={18}
        fontWeight={"bold"}
        color={"rgb(178,0,0)"}
      >
        13/07/2024
      </Text>
      <Divider bgColor={"rgb(178,0,0)"} mt={1} />
      <Text mt={1}>
        Divulgação dos resultados de revisão de notas / Prazo final para erratas
        (Art. 41)
      </Text>
    </VStack>
  );
}
