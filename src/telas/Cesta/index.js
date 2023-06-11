
import React from 'react'; //sempre exportar React from react
import { Image, StyleSheet, Dimensions, Text, View } from 'react-native';//sempre q usamos um componente temos que importar:

import Texto from '../../componentes/Texto';
import Topo from './componentes/Topo';

import logo from "../../../assets/logo.png";


export default function Cesta(){ 
    //default para que so tenha um componente
    return <>
    <Topo/>

    <View style={estilos.cesta}>
        <Texto style={estilos.nome}>Cesta de Verduras</Texto>
        <View style={estilos.fazenda}>
            <Image source={logo} style={estilos.imagemFazenda}/>
            <Texto style={estilos.nomeFazenda}>Jaenny Jack Farm</Texto>
        </View>
        
        <Texto style={estilos.descricao}>Uma cesta de com produtos selecionados 
              cuidadosamente da fazenda direto 
              para sua cozinha</Texto>
        <Texto style={estilos.preco}>R$40,00</Texto>
    </View>
    </>
};

const estilos = StyleSheet.create({

    cesta:{
        paddingVertical: 8,
        paddingHorizontal:16,
        
    },
    nome:{
        color:"#464646",
        fontSize:26,
        lineHeight:42,
        fontWeight: "bold",
    },
    fazenda:{
        flexDirection:"row",
        paddingVertical:12,
    },
    imagemFazenda:{
        width:32,
        height:32,
    },
    nomeFazenda:{
        fontSize:16,
        lineHeight:26,
        marginLeft:12,
    },
    descricao:{
        color:"#A3A3A3",
        fontSize:16,
        lineHeight:26
    },
    preco:{
        color: "#2A9F85",
        fontWeight:"bold",
        fontSize:26,
        lineHeight:42,
        marginTop:8,

    }
});