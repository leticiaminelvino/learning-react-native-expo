
import React from 'react'; //sempre exportar React from react
import { Image, StyleSheet, Dimensions, Text } from 'react-native';//sempre q usamos um componente temos que importar:

import topo from "../../assets/topo.png";

const width = Dimensions.get('screen').width; //para pegar a largura da tela do cllr

export default function Cesta(){ 
    //default para que so tenha um componente
    return <>
    <Image source={topo} style={estilos.topo}/>
    <Text style={estilos.titulo}>Detalhes da Cesta</Text>
    </>
};

const estilos = StyleSheet.create({
    topo:{
        width: "100%",
        height: ((578/768) * width), //largura da img divide largura da img multipicla pelo width   
    },
    titulo: {
        width:"100%", //centro da tela
        position: "absolute", //joga por cima da img
        textAlign: "center",
        fontSize: 16,
        lineHeight:26,
        color:"white",
        fontWeight:"bold",
        padding:16

    }
});