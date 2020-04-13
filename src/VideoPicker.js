import React, { Component } from 'react'
import { Text, StyleSheet, View,FlatList,Dimensions,Image } from 'react-native'
const {width,height} = Dimensions.get('window')


export default class VideoPicker extends Component {

    state = {
        videos: [{ id: '1', name: 'waterfall', type: 'mp4', thumbnail: 'img.jpg' }]
    }
    videoItem = (item) =>{

        return(
        <View style = {{...styles.card,flexDirection:'row'}}>
            {/* <Image 
            source = {require('../'+item.thumbnail)}
            style = {{width:40,height:40}}
            /> */}
            <Text>{item.name}</Text>
        </View>
        )
    }
    render() {
        return (
            <View style = {{flex:1}}>
                <FlatList 
                data = {this.state.videos}
                renderItem={({item}) => this.videoItem(item)}
                
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card:{
        width:width-70,
        padding:30,
        height:400,
        backgroundColor:'red'
    }
})
