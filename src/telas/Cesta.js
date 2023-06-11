
import React from 'react'; //sempre exportar React from react
import { Image, StyleSheet, Dimensions } from 'react-native';//sempre q usamos um componente temos que importar:

import topo from "../../assets/topo.png";

const width = Dimensions.get('screen').width; //para pegar a largura da tela do cllr

export default function Cesta(){ 
    //default para que so tenha um componente
    return <Image source={topo} style={estilos.topo}/>
};

const estilos = StyleSheet.create({
    topo:{
        width: "100%",
        height: ((578/768) * width), //largura da img divide largura da img multipicla pelo width
    }
});