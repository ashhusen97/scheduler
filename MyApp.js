import React from 'react'
import { View,Alert, AsyncStorage, Button } from 'react-native'
import BackgroundTask from 'react-native-background-task'

BackgroundTask.define(async () => {
    // Fetch some data over the network which we want the user to have an up-to-
    // date copy of, even if they have no network when using the app
    console.log('running in bg')
    const response = await fetch('http://autocomplete.wunderground.com/aq?query=karachi')
    const text = await response.text()

    // Data persisted to AsyncStorage can later be accessed by the foreground app
    await AsyncStorage.setItem('ey', text)

    // Remember to call finish()
    BackgroundTask.finish()
})

export default class MyApp extends React.Component {
    componentDidMount() {
        BackgroundTask.schedule({
            period: 60,
            timeout:60 
            
        })

        // Optional: Check if the device is blocking background tasks or not
        this.checkStatus()
    }

    async checkStatus() {
        const status = await BackgroundTask.statusAsync()

        if (status.available) {
           console.log('hellor')
            return
        }

        const reason = status.unavailableReason
        if (reason === BackgroundTask.UNAVAILABLE_DENIED) {
            Alert.alert('Denied', 'Please enable background "Background App Refresh" for this app')
        } else if (reason === BackgroundTask.UNAVAILABLE_RESTRICTED) {
            Alert.alert('Restricted', 'Background tasks are restricted on your device')
        }
    }

    render() {
        return (
            <View>
                <Button
                    title="Read results from AsyncStorage"
                    onPress={async () => {
                        const result = await AsyncStorage.getItem('ey')
                        console.log(result)
                    }}
                />
            </View>
        )
    }
}