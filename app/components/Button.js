import React, { Component } from 'react';
import { TouchableHighlight, View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';

export default class Button extends Component {
  render() {
    const { iconName, mainButton, iconColor=Colors.icon, underlayColor = Colors.tintUnderlay, onPress, text } = this.props;

    return (
      <TouchableHighlight
        underlayColor={underlayColor}
        style={[styles.button, {height: mainButton ? 64 : 32}]}
        onPress={onPress}>
          <View style={styles.btnContent}>
            {
              iconName &&
              <Icon name={iconName} color={iconColor} size={24} style={{alignSelf: 'center'}} />
            }
            <Text style={[styles.btnText, {paddingLeft: iconName ? 15 : 0}]}>{text.toUpperCase()}</Text>
          </View>
      </TouchableHighlight>
    );
  }
}

const styles = {
  button: {
    backgroundColor: Colors.tintColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
    borderRadius: 8
  },
  btnContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 16,
    color: Colors.buttonText,
    fontWeight: 'bold'
  }
};