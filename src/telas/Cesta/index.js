
import React from 'react'; //sempre exportar React from react
import { StyleSheet, View } from 'react-native';//sempre q usamos um componente temos que importar:

import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';

export default function Cesta(){ 
    //default para que so tenha um componente
    return <>
        <Topo/>

        <View style={estilos.cesta}> 
        <Detalhes/>
        </View>
    </>
};

const estilos = StyleSheet.create({
    cesta:{
        paddingVertical: 8,
        paddingHorizontal:16, 
    },
});