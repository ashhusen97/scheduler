/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import Text from '../components/Text';
import OcceanCard from '../containers/OcceanCard';
import TrackCard from '../containers/TrackCard';
export default class ResultList extends Component {
  render() {
    return (
      <View style={styles.Border}>
        <Text fontFamily="Poppins-Regular" h1>
          {this.props.title}
        </Text>
        <Text fontFamily="Poppins-Regular" small>
          {this.props.subtitle}
        </Text>
        <FlatList
          data={this.props.data}
          renderItem={({item}) => {
            return this.props.title === 'Ocean' ? (
              <TrackCard>{item.name}</TrackCard>
            ) : (
              <OcceanCard>{item.name}</OcceanCard>
            );
          }}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Border: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    paddingVertical: 20,
  },
});
