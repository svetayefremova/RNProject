import React, { Component } from 'react';
import { TouchableHighlight } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';

export default class IconButton extends Component {
  render() {
    const { name, color = Colors.icon, underlayColor = Colors.lightOpacity, onPress } = this.props;

    return (
      <TouchableHighlight
        underlayColor={underlayColor}
        style={style.iconButton}
        onPress={onPress}>
        <Icon name={name} color={color} size={24} style={{alignSelf: 'center'}} />
      </TouchableHighlight>
    );
  }
}

const style = {
  iconButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 2
  },
};