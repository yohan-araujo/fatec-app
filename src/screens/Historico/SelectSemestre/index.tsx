import React, { useState } from "react";
import { Box, Select } from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";

interface SelectSemestreProps {
  onSelect: (semestre: string) => void;
}

const SelectSemestre: React.FC<SelectSemestreProps> = ({ onSelect }) => {
  const [semestre, setSemestre] = useState("");

  const handleSemestreChange = (itemValue: string) => {
    setSemestre(itemValue);
    onSelect(itemValue); // Chamando a função onSelect com o semestre selecionado
  };

  return (
    <Box>
      <Select
        selectedValue={semestre}
        minWidth="300"
        accessibilityLabel="Selecione o semestre..."
        placeholder="Selecione o semestre..."
        placeholderTextColor={"white"}
        dropdownIcon={
          <Ionicons size={24} name={"chevron-down"} color={"white"} />
        }
        _selectedItem={{
          bg: "rgb(178,0,0)",
          endIcon: (
            <Ionicons size={24} name={"checkmark-circle"} color={"white"} />
          ),
          _text: {
            color: "white",
            fontWeight: "bold",
          },
        }}
        bgColor={"rgb(178,0,0)"}
        borderWidth={2}
        borderColor={"#842519"}
        mt={1}
        onValueChange={handleSemestreChange}
        color={"white"}
        fontWeight={"bold"}
        fontSize={16}
      >
        <Select.Item
          label="1º Semestre"
          value="1o"
          _text={{
            color: semestre === "1o" ? "white" : "black",
          }}
          rounded={"3xl"}
          fontWeight={"bold"}
        />
        <Select.Item
          label="2º Semestre"
          value="2o"
          _text={{
            color: semestre === "2o" ? "white" : "black",
          }}
          rounded={"3xl"}
          fontWeight={"bold"}
        />
        <Select.Item
          label="3º Semestre"
          value="3o"
          _text={{
            color: semestre === "3o" ? "white" : "black",
          }}
          rounded={"3xl"}
          fontWeight={"bold"}
        />
        <Select.Item
          label="4º Semestre"
          value="4o"
          _text={{
            color: semestre === "4o" ? "white" : "black",
          }}
          rounded={"3xl"}
          fontWeight={"bold"}
        />
        <Select.Item
          label="5º Semestre"
          value="5o"
          _text={{
            color: semestre === "5o" ? "white" : "black",
          }}
          rounded={"3xl"}
          fontWeight={"bold"}
        />
        <Select.Item
          label="6º Semestre"
          value="60"
          _text={{
            color: semestre === "60" ? "white" : "black",
          }}
          rounded={"3xl"}
          fontWeight={"bold"}
        />
      </Select>
    </Box>
  );
};

export default SelectSemestre;
