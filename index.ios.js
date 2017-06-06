import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

const App = () => (
  <View>
    <Header headerText={'Petani'} />
    <AlbumList />
  </View>
);

AppRegistry.registerComponent('twitter', () => App);
