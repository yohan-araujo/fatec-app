import { Box, Button, Image, VStack } from "native-base";
import Input from "../../components/Input";
import FatecLogo from "../../assets/images/logo-fatec.png";
import { Path, Svg } from "react-native-svg";
import Ionicon from "react-native-vector-icons/Ionicons";
import FBM from "../../components/FBM";

export default function Home({ navigation }) {
  return (
    <VStack>
      <Box>
        <Box h={100} backgroundColor={"#bfbfbf"}></Box>
        <Box backgroundColor={"#bfbfbf"} h={200}>
          <Image source={FatecLogo} alt="Logo Fatec" h={200} />
        </Box>

        <Svg
          height={100}
          viewBox="0 0 1440 320"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            top: 290,
          }}
        >
          <Path
            fill="#bfbfbf"
            fill-opacity="1"
            d="M0,160L26.7,176C53.3,192,107,224,160,240C213.3,256,267,256,320,240C373.3,224,427,192,480,192C533.3,192,587,224,640,245.3C693.3,267,747,277,800,282.7C853.3,288,907,288,960,245.3C1013.3,203,1067,117,1120,106.7C1173.3,96,1227,160,1280,176C1333.3,192,1387,160,1413,144L1440,128L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
          />
        </Svg>
      </Box>
      <Box p={10} mt={24}>
        <Input label="E-mail:" placeholder="Digite seu e-mail..." />
        <Input label="RA:" placeholder="Digite seu RA..." mt={4} />
      </Box>
      <Box px={10}>
        <Button
          onPress={() => {
            navigation.navigate("MainApp");
          }}
          rightIcon={<Ionicon name="enter" color="white" size={18} />}
          bgColor={"rgb(178,0,0)"}
          _text={{ textTransform: "uppercase", fontWeight: "bold" }}
        >
          Acessar
        </Button>
      </Box>
    </VStack>
  );
}
