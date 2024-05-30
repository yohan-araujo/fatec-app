import React from "react";
import { Box, Button, Stagger, useDisclose, Text, Fab } from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const TabArr = [
  {
    route: "Home",
    text: "Home",
    icon: "home",
  },
  {
    route: "Perfil",
    text: "Perfil",
    icon: "school",
  },
  {
    route: "Historico",
    text: "Histórico",
    icon: "time",
  },
  {
    route: "Avisos",
    text: "Avisos",
    icon: "alert",
  },
  {
    route: "Carteira",
    text: "Carteira",
    icon: "id-card",
  },
];

interface FloatingButtonProps {
  icon: string;
  text: string;
  route: string;
  navigation: any;
}

const FloatingButton = ({
  icon,
  text,
  route,
  navigation,
}: FloatingButtonProps) => {
  return (
    <Button
      variant="solid"
      rounded="full"
      onPress={() => {
        navigation.navigate(route);
      }}
      leftIcon={<Ionicons size={24} name={icon} color={"white"} />}
      bgColor={"rgb(178,0,0)"}
      mb={4}
      justifyContent={"start"}
    >
      <Text color={"white"} textTransform={"uppercase"} fontWeight={"bold"}>
        {text}
      </Text>
    </Button>
  );
};

export default function FBM() {
  const { isOpen, onToggle } = useDisclose();
  const navigation = useNavigation();

  return (
    <Box position="absolute" bottom={70} right={5} alignItems="end">
      <Stagger
        visible={isOpen}
        initial={{
          opacity: 0,
          scale: 0,
          translateY: 34,
        }}
        animate={{
          translateY: 0,
          scale: 1,
          opacity: 1,
          transition: {
            type: "spring",
            mass: 0.8,
            stagger: {
              offset: 30,
              reverse: true,
            },
          },
        }}
        exit={{
          translateY: 34,
          scale: 0.5,
          opacity: 0,
          transition: {
            duration: 100,
            stagger: {
              offset: 30,
              reverse: true,
            },
          },
        }}
      >
        {TabArr.map((tabButton, index) => {
          return (
            <FloatingButton
              key={index}
              icon={tabButton.icon}
              route={tabButton.route}
              text={tabButton.text}
              navigation={navigation}
            />
          );
        })}
      </Stagger>

      <Fab
        placement="bottom-right"
        icon={<Ionicons size={24} name={"menu"} color={"white"} />}
        size={"lg"}
        bgColor={"rgb(178,0,0)"}
        onPress={onToggle}
      />
    </Box>
  );
}
