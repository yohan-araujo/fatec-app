import React from "react";
import { Box, IBoxProps, Image, Text } from "native-base";

interface CardEventosProps extends IBoxProps {
  uri: any;
  evento: string;
  data: string;
}

export default function CardEventos({
  uri,
  evento,
  data,
  ...rest
}: CardEventosProps) {
  return (
    <Box p={3} bgColor={"white"} shadow={2} borderRadius={10} {...rest}>
      <Box borderRadius={10} overflow="hidden" mb={2}>
        <Image source={uri} alt="imgEventos" h={200} />
      </Box>
      <Box px={3} mt={2}>
        <Text fontSize={18} fontWeight="bold" mb={1} color={"rgb(178,0,0)"}>
          {evento}
        </Text>
        <Text fontSize={14} color="gray.500" mb={2}>
          {data}
        </Text>
        <Text textAlign="justify" fontSize={14} lineHeight={18}>
          Descrição do evento ou informações adicionais podem ser colocadas
          aqui.
        </Text>
      </Box>
    </Box>
  );
}
