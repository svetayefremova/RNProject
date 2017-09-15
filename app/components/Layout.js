import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';

import Colors from '../constants/Colors';

export default class Layout extends Component {
  render() {
    const { children, mainLayout } = this.props;

    return (
      <View style={[style.layout, {padding: mainLayout ? 0 : 16, justifyContent: mainLayout ? 'center' : 'flex-start'}]}>
        <StatusBar barStyle='light-content' />
        {children}
      </View>
    );
  }
}

const style = {
  layout: {
    flex: 1,
    backgroundColor: Colors.background,
  }
};