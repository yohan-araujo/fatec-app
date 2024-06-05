import {
  Box,
  Button,
  HStack,
  Image,
  Link,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import Carrossel from "../../components/Carrosel";
import ImgCarrosel1 from "../../assets/images/carrosselHome/imgCarrosel1.png";
import ImgCarrosel2 from "../../assets/images/carrosselHome/imgCarrosel2.png";
import ImgCarrosel3 from "../../assets/images/carrosselHome/imgCarrosel3.png";
import ImgEventos1 from "../../assets/images/eventos/imgEventos1.png";
import ImgEventos2 from "../../assets/images/eventos/imgEventos2.png";
import ImgEventos3 from "../../assets/images/eventos/imgEventos3.png";
import FatecLogo from "../../assets/images/logo-fatec-pb.png";
import CardEventos from "./CardEventos";
import Ionicons from "react-native-vector-icons/Ionicons";

const caminhoDasFotosCarrossel = [ImgCarrosel1, ImgCarrosel2, ImgCarrosel3];

const caminhoDasFotosEventos = [ImgEventos1, ImgEventos2, ImgEventos3];

export default function Home({ navigation }) {
  return (
    <ScrollView flex={1} p={5}>
      <HStack top={0} left={0} p={2} space={"4"}>
        <Image
          source={FatecLogo}
          alt="Logo Fatec"
          w={150}
          h={150}
          resizeMode="contain"
        />
        <VStack alignItems={"center"} space={3} mt={4}>
          <Button
            variant="solid"
            rounded="3xl"
            leftIcon={<Ionicons size={24} name={"navigate"} color={"white"} />}
            bgColor={"rgb(178,0,0)"}
            justifyContent={"start"}
          >
            <Link href="https://www.fateconline.com.br/sistema/">
              <Text
                color={"white"}
                textTransform={"uppercase"}
                fontWeight={"bold"}
              >
                fatec online
              </Text>
            </Link>
          </Button>
          <Button
            variant="solid"
            rounded="3xl"
            onPress={() => {
              navigation.navigate("Avisos");
            }}
            leftIcon={<Ionicons size={24} name={"warning"} color={"white"} />}
            bgColor={"rgb(178,0,0)"}
            justifyContent={"start"}
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
      <Text fontWeight={"bold"} color={"rgb(178,0,0)"} fontSize={21}>
        Newsletter
      </Text>
      <Text opacity={50}>Aqui vao as noticias</Text>
      <Box mt={3}>
        <Carrossel>
          {caminhoDasFotosCarrossel.map((caminhoDaFoto, index) => (
            <Box
              w={300}
              h={140}
              justifyContent={"center"}
              alignItems={"center"}
              borderWidth={2}
              borderColor={"rgb(178,0,0)"}
            >
              <Image
                key={index}
                source={caminhoDaFoto}
                alt="imgCarrosel"
                w={"100%"}
                resizeMode="contain"
              />
            </Box>
          ))}
        </Carrossel>
      </Box>
      <Text fontWeight={"bold"} color={"rgb(178,0,0)"} fontSize={21} mt={8}>
        Eventos
      </Text>
      <Text opacity={50}>Aqui vao os eventos</Text>
      <VStack mb={12}>
        {caminhoDasFotosEventos.map((caminhoDaFoto, index) => (
          <CardEventos key={index} uri={caminhoDaFoto} mt={3} />
        ))}
      </VStack>
    </ScrollView>
  );
}
