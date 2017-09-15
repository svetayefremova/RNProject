import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import { fetchList } from '../actions';

import Layout from '../components/Layout';
import Item from '../components/Item';

import Colors from '../constants/Colors';

class ListScreen extends Component {
  componentDidMount() {
    this.props.fetchList();
  }

  renderItem = ({ item }) => (
    <Item
      name={item.name}
      description={item.description}
      isfree={item.isfree}
      picturefilename={item.picturefilename}
    />
  );

  render() {
    const { isFetching, list } = this.props;

    return (
      <Layout>
        { isFetching
          ? <ActivityIndicator large/>
          : <FlatList
              data={list}
              renderItem={this.renderItem}
              keyExtractor={item => item.id}/>
        }
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  list: state.items,
  isFetching: state.isFetching,
});

export default connect(mapStateToProps, { fetchList })(ListScreen);