import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black } from "@expo-google-fonts/inter/";
import { Loading } from "./src/components/Loading/loading";
import { Login } from "./src/Screen/Login";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { THEME } from "./src/Theme";
import { SignUp } from "./src/Screen/SignUp";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./src/Screen/Home";
import { Profile } from "./src/Screen/Profile";
import { Provider as AuthProvider, Context as AuthContext } from "./src/context/AuthContext";
import { useContext, useEffect } from "react";
import { Friends } from "./src/Screen/Friends";
import { House, User, UsersThree } from "phosphor-react-native";
import { Provider as PostProvider } from "./src/context/AuthContext";

const myTheme ={
  ...DefaultTheme,
  dark:true,
  colors:{
    ...DefaultTheme.colors,
    background: THEME.COLORS.BACKGROUND_900,
  }
}

 function App() {
  const {token, tryLocalLogin} = useContext(AuthContext);

  useEffect(()=>{
    tryLocalLogin && tryLocalLogin();
  }, []);
   
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <SafeAreaProvider>
      {fontsLoaded ? (
        <NavigationContainer theme = {myTheme}>
          {!token ?  (
            <Stack.Navigator
            screenOptions={{
              headerShown: false,
              statusBarStyle: "dark",
            }}
          >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </Stack.Navigator>
        ) : (
          <Tab.Navigator screenOptions={({route}) =>({
            tabBarIcon:({color, size}) =>{
              switch (route.name){
                case "Home": 
                  return <House size={size} color={color}/>;
                case "Friends": 
                  return <UsersThree size={size} color={color}/>;
                case "Profile":
                  return <User size={size} color={color} />;
              }
            },
            tabBarStyle : {backgroundColor: THEME.COLORS.BACKGROUND_800},
            tabBarShowLabel: false,
            headerShown:false,
          })}>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Friends" component={Friends}/>
            <Tab.Screen name="Profile" component={Profile}/>
          </Tab.Navigator>
        )}
        </NavigationContainer>
      ): (
        <Loading />
      )}
    </SafeAreaProvider>
  );
}

export default () => {
  return (
    <AuthProvider>
      <PostProvider>
        <App/>
      </PostProvider>
    </AuthProvider>
  )
}