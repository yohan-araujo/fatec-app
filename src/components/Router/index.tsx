import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../screens/Login";
import Historico from "../../screens/Historico";
import Home from "../../screens/Home";
import FBM from "../FBM";
import Perfil from "../../screens/Perfil";
import Avisos from "../../screens/Avisos";
import Carteira from "../../screens/Carteira";

const Tab = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Historico"
        component={Historico}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Avisos"
        component={Avisos}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Carteira"
        component={Carteira}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

function MainApp() {
  return (
    <>
      <MyTabs />
      <FBM />
    </>
  );
}

export default function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="MainApp"
          component={MainApp}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
