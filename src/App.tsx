import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootLayout from "./screens/Layout/layout";

const App = () => {
  return (
    <NavigationContainer>
      <RootLayout />
    </NavigationContainer>
  );
};

export default App;
