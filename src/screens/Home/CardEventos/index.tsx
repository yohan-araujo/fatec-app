import { Box, IBoxProps, Image, Text } from "native-base";

interface CardEventosProps extends IBoxProps {
  uri: any;
}

export default function CardEventos({ uri, ...rest }: CardEventosProps) {
  return (
    <Box
      p={5}
      bgColor={"white"}
      {...rest}
      borderWidth={2}
      borderColor={"rgb(178,0,0)"}
    >
      <Box>
        <Image source={uri} alt="imgEventos" resizeMode="contain" />
      </Box>
      <Box bgColor={"white"} px={5}>
        <Text textTransform={"uppercase"} textAlign={"justify"} fontSize={16}>
          Nome do evento
        </Text>
        <Text opacity={25}>Data</Text>
      </Box>
    </Box>
  );
}
