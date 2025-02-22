// import React from "react";
// import { View, StyleSheet } from "react-native";
// import Navbar from "../../components/Navbar";
// import { useNavigationState } from "@react-navigation/native";

// const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const navigationState = useNavigationState((state) => state);

//   // เช็กว่ามี navigationState และมี routes ก่อนดึงข้อมูล
//   const currentRoute = navigationState?.routes?.[navigationState.index]?.name || "";

//   // ซ่อน Navbar เมื่ออยู่ในหน้า Login หรือ Register
//   const hideNavbar = currentRoute === "Login" || currentRoute === "Register";

//   return (
//     <View style={styles.container}>
//       {children}
//       {!hideNavbar && <Navbar />}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default Layout;
