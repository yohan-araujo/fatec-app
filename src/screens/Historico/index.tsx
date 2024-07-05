import React, { useState } from "react";
import { Box, Text, VStack } from "native-base";
import SelectSemestre from "./SelectSemestre";
import HistoricoList from "./HistoricoList";

const Historico = () => {
  const [selectedSemestre, setSelectedSemestre] = useState<string | null>(null);

  const data = [
    {
      disciplina: "Matemática",
      cargaHoraria: 60,
      semestreAno: "20241",
      nota: 8.5,
      aprovado: true,
    },
    {
      disciplina: "História",
      cargaHoraria: 45,
      semestreAno: "20241",
      nota: 7.0,
      aprovado: true,
    },
    {
      disciplina: "Física",
      cargaHoraria: 75,
      semestreAno: "20241",
      nota: 5.5,
      aprovado: false,
    },
  ];

  return (
    <VStack flex={1} p={5}>
      <Text fontWeight={"bold"} color={"rgb(178,0,0)"} fontSize={21}>
        Histórico
      </Text>
      <Text>
        Aqui o aluno pode visualizar informações pertinentes de semestres
        anteriores
      </Text>

      <Text fontWeight={"bold"} color={"rgb(178,0,0)"} fontSize={21} mt={4}>
        Seleção de semestre
      </Text>
      <Box mt={4}>
        <SelectSemestre
          onSelect={(semestre) => setSelectedSemestre(semestre)}
        />
      </Box>

      {selectedSemestre ? (
        <Box mt={4}>
          <HistoricoList data={data} />
        </Box>
      ) : (
        <Box mt={8}>
          <Text
            textAlign={"center"}
            color={"rgb(178,0,0)"}
            fontWeight={"bold"}
            fontSize={24}
          >
            Por favor selecione o semestre!
          </Text>
        </Box>
      )}
    </VStack>
  );
};

export default Historico;
