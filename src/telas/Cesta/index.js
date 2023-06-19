
import React from 'react'; //sempre exportar React from react
import { StyleSheet, View, FlatList } from 'react-native';//sempre q usamos um componente temos que importar:

import Texto from '../../componentes/Texto'

import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';
import Item from './componentes/Item'

export default function Cesta({topo, detalhes, itens}){ 
    //default para que so tenha um componente
    return <>
        <FlatList 
            data={itens.lista} 
            renderItem={Item}
            keyExtractor={({ nome }) => nome }
            ListHeaderComponent={()=>{
               return <>
                    <Topo {...topo}/>
                    <View style={estilos.cesta}> 
                        <Detalhes {...detalhes}/>
                        <Texto style={estilos.titulo}>{itens.titulo} </Texto>
                    </View>

                </>
            }}
        />
    </>
};

const estilos = StyleSheet.create({
    titulo:{
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize:20,
        lineHeight:32,
    },
    cesta:{
        paddingVertical: 8,
        paddingHorizontal:16, 
    },
});