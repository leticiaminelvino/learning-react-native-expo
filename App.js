import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
//SafeAreaView para o ios para evitar a barra de status

import Cesta from "./src/telas/Cesta" //nao precisa dos cochetes pq ja exportamos no outro arquivo

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar/>
      <Cesta />
    </SafeAreaView>
  );
}

