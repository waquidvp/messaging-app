import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ListView,
} from 'react-native';

import ContactBubble from './ContactBubble';
import data from '../assets/data';

export default class Contacts extends Component{
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
        renderRow={(data) => <ContactBubble {...data} />}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
      />
    );
  }
}

const styles = StyleSheet.create({
  mainCont:{
    flex: 1,
    backgroundColor: '#673ab7',
  },
  listCont:{
    flex: 1,
    paddingTop: 4,
  },
  separator: {
    flex: 1,
    height: 4,
  },
})
