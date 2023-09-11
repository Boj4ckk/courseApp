import React from "react";
import { View, Text } from "react-native";


import {store} from './Redux/store'
import { Provider} from "react-redux";


import { AppNav } from "./routes/AppNav";

export default function App() {

  
  return (
    <Provider store={store}>
      <AppNav/>
    </Provider>
      
    
  );
}


