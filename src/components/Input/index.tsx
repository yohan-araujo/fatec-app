import { IInputProps, Text, Input as TextInput, VStack } from "native-base";

interface InputProps extends IInputProps {
  label?: string;
  placeholder?: string;
  tipo?: "text" | "password";
}

export default function Input({
  placeholder,
  tipo,
  label,
  ...rest
}: InputProps) {
  return (
    <VStack {...rest}>
      <Text fontSize={16} fontWeight={"bold"} textTransform={"uppercase"}>
        {label}
      </Text>
      <TextInput
        variant={"underlined"}
        placeholder={placeholder}
        type={tipo}
        mt={2}
        size={"lg"}
        _focus={{ borderColor: "rgb(178,0,0)" }}
      />
    </VStack>
  );
}
