import React from "react"; 
import {Image, StyleSheet, Dimensions} from "react-native";

import Texto from "../../../componentes/Texto";
import topo from "../../../../assets/topo.png";

const width = Dimensions.get('screen').width; //para pegar a largura da tela do cllr


export default function Topo() {
    return <>
        <Image source={topo} style={estilos.topo}/>
        <Texto style={estilos.titulo}>Detalhes da Cesta</Texto>
    </>
}

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
    },

}
);