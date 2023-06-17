
import React from 'react'; //sempre exportar React from react
import { ScrollView, StyleSheet, View } from 'react-native';//sempre q usamos um componente temos que importar:

import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';
import Itens from './componentes/Itens'

export default function Cesta({topo, detalhes, itens}){ 
    //default para que so tenha um componente
    return <ScrollView>
        <Topo {...topo}/>

        <View style={estilos.cesta}> 
            <Detalhes {...detalhes}/>
            <Itens {...itens}/>
        </View>
    </ScrollView>
};

const estilos = StyleSheet.create({
    cesta:{
        paddingVertical: 8,
        paddingHorizontal:16, 
    },
});