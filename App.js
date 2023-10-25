import * as React from "react";
import MainContainer from "./navigation/MainContainer";
import { Text } from "react-native";
import { View } from "react-native";
import { useFonts } from "expo-font";

const App = () => {
  const [fontsLoaded] = useFonts({
    "font-regular": require("./assets/fonts/YekanBakh-Regular.otf"),
    "font-bold": require("./assets/fonts/YekanBakh-Bold.otf"),
    "font-extraBold": require("./assets/fonts/YekanBakh-ExtraBold.otf"),
    "font-black": require("./assets/fonts/YekanBakh-Black.otf"),
  });
  return <MainContainer />;
};

export default App;

// import React, { useState } from "react";
// import {
//   Button,
//   FlatList,
//   TextInput,
//   SafeAreaView,
//   Platform,
//   StatusBar,
//   ScrollView,
// } from "react-native";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
// } from "react-native";
// import Banners from "./Components/Banners";
// import Address from "./Components/Address";
// import Search from "./Components/Search";
// import Grouping from "./Components/Grouping";

// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import Home from "./screens/home";
// import About from "./screens/about";

// const Stack = createStackNavigator();

// const App = () => {
//   const [fullName, setFullName] = useState([
//     { name: "ابولفضل مختاری", id: 1 },
//     { name: "مادر داش آرمین", id: 2 },
//     { name: "رضا مرادی", id: 3 },
//     { name: "جاسم تاجیک", id: 4 },
//     { name: "علی نژادعلی چالشتری", id: 5 },
//     { name: "داداش جون", id: 6 },
//     { name: "داداش عرفان", id: 7 },
//     { name: "بالاشهری", id: 8 },
//   ]);

//   const data = [
//     { image: require("./assets/session.png") },
//     { image: require("./assets/session.png") },
//     { image: require("./assets/session.png") },
//     { image: require("./assets/session.png") },
//   ];
//   const handleClick = () => {
//     setFullName("reza");
//   };
//   const handleDelete = (id) => {
//     const filteredContacts = fullName.filter((m) => m.id !== id);
//     setFullName(filteredContacts);
//   };
//   return (

//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="About" component={About} />
//       </Stack.Navigator>
//     </NavigationContainer>
//     // <View style={styles.container}>
//     //   <Address />
//     //   <Search />
//     //   {/* <View style={{ height: 30, backgroundColor: "pink" }}>
//     //     <Banners data={data} />
//     //   </View> */}
//     //   <Grouping />
//     //   {/* <FlatList
//     //     numColumns={2}
//     //     // horizontal={true}
//     //     keyExtractor={(item) => item.id}
//     //     data={fullName}
//     //     renderItem={({ item: a }) => (
//     //       <TouchableOpacity onPress={() => handleDelete(a.id)}>
//     //         <View style={styles.header}>
//     //           <Text
//     //             style={{
//     //               fontSize: 20,
//     //               fontWeight: "bold",
//     //               color: "#fff",
//     //             }}>
//     //             {a.name}
//     //           </Text>
//     //         </View>
//     //       </TouchableOpacity>
//     //     )}
//     //   /> */}
//     // </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     height: "100%",
//     backgroundColor: "#365eff",
//     // alignItems: "center",
//     // justifyContent: "center",
//     paddingTop:
//       Platform.OS === "android" ? StatusBar.currentHeight : 0,
//   },
//   header: {
//     flex: 1,
//     backgroundColor: "#ffbb00",
//     padding: 50,
//     // width: "10%",
//     textAlign: "center",
//     marginBottom: 10,
//   },
//   toplearnText: {
//     color: "#fff",
//     fontWeight: "bold",
//   },
//   body: {
//     padding: 20,
//     margin: 20,
//     fontSize: 20,
//     fontWeight: "bold",
//   },
// });

// export default App;
