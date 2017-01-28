import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ListView,
} from 'react-native';

import ChatBubble from './ChatBubble';
import data from '../assets/data';

export default class Chats extends Component{
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(data),
    };
  }

  render() {
    return (
      <ListView
        style={styles.listCont}
        dataSource={this.state.dataSource}
        renderRow={(data) => <ChatBubble {...data} />}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
      />
    );
  }
}

const styles = StyleSheet.create({
  listCont:{
    flex: 1,
    paddingTop: 4,
    paddingBottom: 4,
  },
  separator: {
    flex: 1,
    height: 4,
  },
})
