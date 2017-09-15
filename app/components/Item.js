import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

import Button from './Button';
import Colors from '../constants/Colors';

//TODO fix pictures sources
export default class Item extends Component {
  render() {
    const { name, description, picturefilename, isfree } = this.props;

    return (
      <View style={styles.item}>
        <Image
          resizeMode="cover"
          blurRadius={5}
          style={styles.image}
          source={{}}>
          <Text style={{fontSize: 10, textAlign: 'center'}}>{picturefilename}</Text>
        </Image>
        <View style={styles.info}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>{name}</Text>
          <Text style={{fontSize: 11, fontStyle: 'italic'}}>{description}</Text>
        </View>
        <View style={{width: 64}}>
          <Button
            onPress={() => console.log('button is pressed')}
            text={isfree ? 'Free' : 'Buy'}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: Colors.darkOpacity,
    borderBottomWidth: 1
  },
  image: {
    width: 82,
    height: 82,
    backgroundColor: Colors.darkOpacity,
    justifyContent: 'center'
  },
  info: {
    flex: 1,
    paddingHorizontal: 8
  }
});