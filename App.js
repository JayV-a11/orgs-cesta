import React from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
import Cesta from './src/Cesta';

import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

import mock from './src/mocks/cesta.js';

export default function App() {
  const [fontCarregada] = useFonts({
    'MontserratRegular': Montserrat_400Regular,
    'MontserratBold': Montserrat_700Bold
  });

  if(!fontCarregada) {
    return ( <AppLoading />)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Cesta {...mock}/>
    </SafeAreaView>
  );
}