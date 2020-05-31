import React, { Component } from 'react'
import { Text, StyleSheet, View,Dimensions } from 'react-native'
import moment from 'moment'
const {width,height} = Dimensions.get('window')
export default class AlarmItem extends Component {
    render() {
        
        return (
            <View style = {{width:width-20,elevation:4,borderRadius:10,backgroundColor:'white',padding:20,marginVertical:5}}>
                <Text style = {{fontSize:23}}> {moment(this.props.data.date).format('HH:MM')}  </Text>
                <Text style={{ fontSize: 23 }}> {moment(this.props.data.date).add(4,'day').format('dd')}  </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
