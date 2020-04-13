import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity} from 'react-native'
import Clock from './src/components/Clock';
import SetVideos from './src/components/setVideos';
import BackgroundTimer from 'react-native-background-timer'
import moment from 'moment'
import VideoModal from './src/components/VideoModal';
export default class Alarmsecond extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            count:0,
            videoModal:false,
            clockVisible:false,
            modalVisible:false,
            
                wakeupVideos: [
                    { id: Math.random(), name: "Wakeup 1", link: require('./src/assets/affirm.mp4'),thumbnail : require('./src/assets/thumbnail1.jpg') },
                    { id: Math.random(), name: "Wakeup 2", link: require('./src/assets/bunny.mp4'),thumbnail : require('./src/assets/img1.jpg') },
                    { id: Math.random(), name: "Wakeup 3", link: require('./src/assets/waterfall.mp4'),thumbnail : require('./src/assets/img1.jpg') },
                    { id: Math.random(), name: "Wakeup 4", link: require('./src/assets/waterfall.mp4'),thumbnail : require('./src/assets/img1.jpg') },
                    { id: Math.random(), name: "Wakeup 5", link: require('./src/assets/waterfall.mp4'),thumbnail : require('./src/assets/img1.jpg') },
                    { id: Math.random(), name: "Wakeup 6", link: require('./src/assets/waterfall.mp4'),thumbnail : require('./src/assets/img1.jpg') },

                ],
                AffirmationVideos: [
                    { id: Math.random(), name: "Affirmation 1", link: require('./src/assets/affirm2.mp4'), thumbnail: require('./src/assets/thumbnail2.jpg') },
                    { id: Math.random(), name: "Affirmation 2", link: require('./src/assets/waterfall.mp4'),thumbnail : require('./src/assets/img1.jpg') },
                    { id: Math.random(), name: "Affirmation 3", link: require('./src/assets/waterfall.mp4'),thumbnail : require('./src/assets/img1.jpg') },
                    { id: Math.random(), name: "Affirmation 4", link: require('./src/assets/waterfall.mp4'),thumbnail : require('./src/assets/img1.jpg') },
                    { id: Math.random(), name: "Affirmation 5", link: require('./src/assets/waterfall.mp4'),thumbnail : require('./src/assets/img1.jpg') },
                    { id: Math.random(), name: "Affirmation 6", link: require('./src/assets/waterfall.mp4'),thumbnail : require('./src/assets/img1.jpg') },

                ],
                selectedVideos:[],
                date:null,
                repeat: true,
                rate: 1,
                volume: 1,
                muted: false,
                resizeMode: 'contain',
                duration: 0.0,
                currentTime: 0.0,
                paused: true,
                rateText: '1.0',
                pausedText: 'Play',
                hideControls: false,
                counter: 0,
            
        }
    }
    countPlus = (data) =>{
        
        if(this.state.count<=this.state.selectedVideos.length)
        {
            this.setState({ count: this.state.count + 1 })
            this.setState({ paused: false })
            
        }
        else
        {
            this.setState({paused:true})
        }
            
       
    
    }
    handleConfirm = (datetime)  =>{
        
        this.hideDatePicker()
        this.setState({date:datetime,modalVisible:true})

    }

    hideDatePicker = () => {
        this.setState({ clockVisible: false });
    };

    hideModal = () =>{
        this.setState({modalVisible:false})
    }

    pressHandler = (item) => {
        if(this.state.selectedVideos.length<2)
        {
        this.setState({
            selectedVideos : [...this.state.selectedVideos,item.link]
        })
        }
        else
        {
            alert('Maximum 3 Videos allowed')
        }
    }

    onLoad = (data) => {
        this.setState({ duration: data.duration })
    }
    onPress = (data) => {
        this.setState({ currentTime: data.currentTime })
    }
    onEnd = () => {
        this.setState({ pausedText: 'Play', paused: true })
        this.video.seek(0);
    }

    pause = () => 
    { 
        this.setState({ paused: !this.state.paused }) 
}

    stop = () => {
        this.setState({ videoModal: false, paused: true })
        BackgroundTimer.clearInterval(this.interval)

        BackgroundTimer.stop()

    }


    addAlarm = () =>{
        if(this.state.selectedVideos.length!==0)
        {
            var date1 = moment(this.state.date).format()

            var diff = moment(date1).diff(moment().format())
            if (diff < 0) {
                alert('Time has passed')
                
            }
            else
            {
                BackgroundTimer.start()
                this.interval = BackgroundTimer.setInterval(() => {

                    this.setState({
                        videoModal: true,
                        paused: false
                    })
                },
                    diff)
                BackgroundTimer.stop() 
            }
        }
        else
        {
            alert('Please Select atleast one video')
        }
    }
    render() {
        console.log(this.state.count)
        return (
            <View style = {{flex : 1}}>
                <TouchableOpacity 
                onPress = {()=>{this.setState({clockVisible:true})}}
                style={{ backgroundColor: "#ff7061",position:"absolute",bottom:0,width:'100%',padding:20,alignItems:"center"}}>
                  <Text style = {{color:'white',fontSize:20}}>Add Schedule</Text>
                </TouchableOpacity>
                <Clock 
                isDatePickerVisible = {this.state.clockVisible} 
                handleConfirm = {this.handleConfirm}
                    
                />
                <SetVideos 
                hideModal={this.hideModal}
                modalVisible = {this.state.modalVisible}
                WakeupVideos = {this.state.wakeupVideos}
                AffirmationVideos = {this.state.AffirmationVideos}
                pressHandler = {this.pressHandler}
                addAlarm = {this.addAlarm}
                />
                <VideoModal
                videoModal={this.state.videoModal}
                repeat = {this.state.repeat}
                rate = {this.state.rate}
                muted = {this.state.muted}
                resizeMode={this.state.resizeMode}
                paused={this.state.paused}
                onLoad={this.onLoad}
                onEnd={this.countPlus}
                stop = {this.stop}
                source = {this.state.selectedVideos}
                pause = {this.pause}
                counter = {this.state.count}


                />
            </View>
        )
    }
}

const styles = StyleSheet.create({})
