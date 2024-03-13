import React from 'react';
import Rotas from './src/rotas';
import Reactotron from 'reactotron-react-native';
import { buscaUsuario } from './src/servicos/requisicoes/usuario';

Reactotron.useReactNative().connect();

export default function App() {
  Reactotron.display(buscaUsuario);
  return (
    <Rotas />
    
  );
}