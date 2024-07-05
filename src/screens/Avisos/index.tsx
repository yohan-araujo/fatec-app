import { Box, ScrollView, Text, VStack } from "native-base";
import CardAvisos from "./CardAvisos";
import CardData from "./CardData";

export default function Avisos() {
  return (
    <ScrollView flex={1} p={5}>
      <Text fontWeight={"bold"} color={"rgb(178,0,0)"} fontSize={21}>
        Quadro de avisos
      </Text>
      <Text>
        Quadro que contém avisos referentes às aulas, eventos e troca de salas
      </Text>
      <Box mt={4}>
        <CardAvisos />
        <CardAvisos mt={2} />
        <CardAvisos mt={2} />
      </Box>
      <Text fontWeight={"bold"} color={"rgb(178,0,0)"} fontSize={21} mt={4}>
        Calendário Institucional
      </Text>
      <Text>
        Calendário onde se localiza informações sobre as datas próximas.
      </Text>
      <Box mt={4} mb={16}>
        <CardData />
        <CardData mt={3} />
        <CardData mt={3} />
        <CardData mt={3} />
        <CardData mt={3} />
      </Box>
    </ScrollView>
  );
}
