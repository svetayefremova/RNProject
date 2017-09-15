import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Layout from '../components/Layout';
import Button from '../components/Button';

import Mesuments from '../constants/Mesuments';
import Colors from '../constants/Colors';

class HomeScreen extends Component {
  render() {
    return (
      <Layout mainLayout>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={require('../assets/images/firstscreen.jpg')}>
          <View style={styles.textContainer}>
            <Text style={[styles.text, {fontSize: 32,  paddingBottom: 16}]}>The easiest way to learn piano</Text>
            <Text style={[styles.text, {fontSize: 16 }]}>Get on the path to your music dreams – interactive piano lessons for beginners and advanced players</Text>
          </View>
          <Button
            mainButton
            onPress={() => Actions.list()}
            text="Start now"
            iconName="md-musical-notes"
          />
        </Image>
      </Layout>
    );
  }
}

const styles = {
  image: {
    flex: 1,
    padding: 32,
    justifyContent: 'center',
    width: Mesuments.window.width,
    height: Mesuments.window.height,
    paddingBottom: 150
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 32,
  },
  text: {
    textAlign: 'center',
    backgroundColor: 'transparent',
    color: Colors.text,
    textShadowColor: Colors.shadow,
  }
};

export default HomeScreen;