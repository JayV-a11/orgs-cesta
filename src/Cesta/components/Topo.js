import React from 'react';

import { Image, StyleSheet, Dimensions } from 'react-native';
import Texto from '../../screens/components/Texto';
import topo from '../../../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function Topo({ titulo }) {
    return(
        <>
            <Image style={styles.topo} source={topo} />
            <Texto style={styles.titulo}>{titulo}</Texto>
        </>
    );
}

const styles = StyleSheet.create({
    topo: {
         width: '100%',
         height: 578 / 768 * width,
    },
    titulo: {
         position: 'absolute',  
         textAlign: 'center',
         width: '100%',
         fontSize: 16,
         lineHeight: 26,
         color: '#FFF',
         fontWeight: 'bold',
         padding: 16 
    },
});