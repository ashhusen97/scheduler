import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";
export default class Clock extends Component {
   
    render() {
        return (
            <DateTimePickerModal
                isVisible={this.props.isDatePickerVisible}
                mode={'time'}
                onConfirm={this.props.handleConfirm}
                is24Hour={false}
                onCancel={() => { this.props.hideDatePicker}}
                date={new Date()}

            />
        )
    }
}

const styles = StyleSheet.create({})
