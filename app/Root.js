import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';

import store from './store';

import Colors from './constants/Colors';

import HomeScreen from './screens/Home';
import ListScreen from './screens/List';
import IconButton from './components/IconButton';

export default class Root extends Component {
  render() {
    return (
      <Router store={store}>
        <Scene
          key="root"
          navigationBarStyle={styles.navBar}
          titleStyle={styles.title}>
          <Scene
            key="home"
            component={HomeScreen}
            hideNavBar
            initial
          />
          <Scene
            key="list"
            component={ListScreen}
            title={"Lesson's List".toUpperCase()}
            back
            renderBackButton={() => (
              <IconButton
                onPress={() => Actions.pop()}
                name='md-arrow-back'/>
            )}
          />
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: Colors.tintColor,
    borderBottomWidth: 0,
    paddingTop: 20,
    height: 64
  },
  title: {
    color: Colors.screenTitle,
    fontSize: 16,
    fontWeight: '700'
  },
});