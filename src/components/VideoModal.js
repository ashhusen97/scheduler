import React, { Component } from 'react'
import { Text, StyleSheet, View ,Modal,Button} from 'react-native'
import Video from 'react-native-video';
import setAlarm from './setAlarm';
export default class VideoModal extends Component {
   
    render() {
        return (
            <Modal
                visible={this.props.videoModal}
            >
                <View style={{ flex: 1, backgroundColor: 'gray' }}>
                    <View style={{ flex: 3 }}>
                      
                   
                        <Video
                            disableFocus={false}
                            pictureInPicture={true}
                            ref={(ref) => { this.video = ref }}
                            source={this.props.source[this.props.counter]}
                            repeat={!this.props.repeat}
                            rate={this.props.rate}
                            volume={1}
                            muted={this.props.muted}
                            resizeMode={this.props.resizeMode}
                            paused={this.props.paused}
                            onLoad={this.props.onLoad}
                            onProgress={this.onProgress}
                            onEnd={this.props.onEnd}
                            controls={true}
                            playInBackground={true}
                            
                            style={styles.backgroundVideo}
                        />

                      
                    </View>
                    <View style={{ flex: 1 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center',alignItems:"center" }}>
                            <Button title="Stop" onPress={this.props.stop} />
                            <Button title="Pause" onPress={this.props.pause} />
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0
    },
})
