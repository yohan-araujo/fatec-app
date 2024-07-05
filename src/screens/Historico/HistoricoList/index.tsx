import React from "react";
import { Box, HStack, Text, FlatList } from "native-base";
import { Ionicons } from "@expo/vector-icons";

interface Disciplina {
  disciplina: string;
  cargaHoraria: number;
  semestreAno: string;
  nota: number;
  aprovado: boolean;
}

interface HistoricoListProps {
  data: Disciplina[];
}

export default function HistoricoList({ data }: HistoricoListProps) {
  return (
    <Box mt={4}>
      <HStack
        justifyContent="space-between"
        alignItems="center"
        p={2}
        borderBottomWidth={2}
        borderColor="gray.300"
        backgroundColor="gray.100"
      >
        <Text fontWeight="bold">Disciplina</Text>
        <HStack width="70%" justifyContent="space-between">
          <Text fontWeight="bold">C.H.</Text>
          <Text fontWeight="bold">Semestre/Ano</Text>
          <Text fontWeight="bold">Nota</Text>
          <Text fontWeight="bold">Aprovado</Text>
        </HStack>
      </HStack>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <HStack
            justifyContent="space-between"
            alignItems="center"
            p={2}
            borderBottomWidth={1}
            borderColor="gray.200"
          >
            <Text fontWeight="bold">{item.disciplina}</Text>
            <HStack width="70%" justifyContent="space-between">
              <Text>{item.cargaHoraria}h</Text>
              <Text>{item.semestreAno}</Text>
              <Text>{item.nota}</Text>
              <Ionicons
                name={item.aprovado ? "checkmark-circle" : "close-circle"}
                size={24}
                color={item.aprovado ? "green" : "red"}
              />
            </HStack>
          </HStack>
        )}
      />
    </Box>
  );
}
