import React from "react";
import {
  Box,
  Button,
  HStack,
  Image,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import Carrossel from "../../components/Carrosel";
import CardEventos from "./CardEventos";
import Ionicons from "react-native-vector-icons/Ionicons";
import FatecLogo from "../../assets/images/logo-fatec-pb.png";
import ImgCarrosel1 from "../../assets/images/carrosselHome/imgCarrosel1.png";
import ImgCarrosel2 from "../../assets/images/carrosselHome/imgCarrosel2.png";
import ImgCarrosel3 from "../../assets/images/carrosselHome/imgCarrosel3.png";
import ImgEventos1 from "../../assets/images/eventos/imgEventos1.png";
import ImgEventos2 from "../../assets/images/eventos/imgEventos2.png";
import ImgEventos3 from "../../assets/images/eventos/imgEventos3.png";

const caminhoDasFotosCarrossel = [ImgCarrosel1, ImgCarrosel2, ImgCarrosel3];
const caminhoDasFotosEventos = [ImgEventos1, ImgEventos2, ImgEventos3];

export default function Home({ navigation }) {
  return (
    <ScrollView flex={1} p={5}>
      <HStack top={0} left={0} p={2} space={4} alignItems="center">
        <Image
          source={FatecLogo}
          alt="Logo Fatec"
          w={150}
          h={150}
          resizeMode="contain"
        />
        <VStack space={3} alignItems="center" flex={1}>
          <Button
            variant="solid"
            rounded="3xl"
            leftIcon={<Ionicons size={24} name={"navigate"} color={"white"} />}
            bgColor={"rgb(178,0,0)"}
            justifyContent={"start"}
            onPress={() =>
              navigation.navigate("https://www.fateconline.com.br/sistema/")
            }
          >
            <Text
              color={"white"}
              textTransform={"uppercase"}
              fontWeight={"bold"}
            >
              fatec online
            </Text>
          </Button>
          <Button
            variant="solid"
            rounded="3xl"
            leftIcon={<Ionicons size={24} name={"warning"} color={"white"} />}
            bgColor={"rgb(178,0,0)"}
            justifyContent={"start"}
            onPress={() => navigation.navigate("Avisos")}
          >
            <Text
              color={"white"}
              textTransform={"uppercase"}
              fontWeight={"bold"}
            >
              Avisos
            </Text>
          </Button>
        </VStack>
      </HStack>

      <Box mt={6}>
        <Text fontWeight={"bold"} color={"rgb(178,0,0)"} fontSize={21}>
          Newsletter
        </Text>
        <Text>Notícias presentes neste infohub</Text>
        <Box mt={3}>
          <Carrossel>
            {caminhoDasFotosCarrossel.map((caminhoDaFoto, index) => (
              <>
                <Box
                  key={index}
                  w={300}
                  h={135}
                  borderRadius={10}
                  overflow="hidden"
                  shadow={"5"}
                >
                  <Image
                    source={caminhoDaFoto}
                    alt={`imgCarrossel${index + 1}`}
                    w={"100%"}
                    h={"100%"}
                    resizeMode="contain"
                  />
                </Box>
                <Text my={2}>Teste para texto</Text>
              </>
            ))}
          </Carrossel>
        </Box>
      </Box>

      <Box mt={8} mb={32}>
        <Text fontWeight={"bold"} color={"rgb(178,0,0)"} fontSize={21}>
          Eventos
        </Text>
        <Text>Eventos passados e próximos</Text>
        <VStack mt={3} space={3}>
          {caminhoDasFotosEventos.map((caminhoDaFoto, index) => (
            <CardEventos
              key={index}
              uri={caminhoDaFoto}
              evento={`Evento ${index + 1}`}
              data="01/01/2024"
            />
          ))}
        </VStack>
      </Box>
    </ScrollView>
  );
}
