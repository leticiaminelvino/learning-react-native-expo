import React from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native'; //SafeAreaView para o ios para evitar a barra de status
import {
  useFonts, 
  Montserrat_400Regular,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';

import Cesta from "./src/telas/Cesta" //nao precisa dos cochetes pq ja exportamos no outro arquivo
import mock from './src/mocks/cesta';

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });
  if(!fonteCarregada){
    return <View/>
  }
  return ( //flex:1 p/ q oqseja carregado seja so o conteudo na tela no momento
    <SafeAreaView style={{ flex:1 }}> 
      <StatusBar/>
      <Cesta {...mock} /> 
    </SafeAreaView>
  );
}

