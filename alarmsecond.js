import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity,FlatList,Modal,Dimensions,Image} from 'react-native'
const { height } = Dimensions.get('window')
import Clock from './src/components/Clock';
import SetVideos from './src/components/setVideos';
import BackgroundTimer from 'react-native-background-timer'
import moment from 'moment'
import VideoModal from './src/components/VideoModal';
import AlarmItem from './src/components/alarm';
import SetAlarm from './src/components/setAlarm'
export default class Alarmsecond extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            repeatedDays:[],
            selecedVideoName:[],
            setAlarmModal : false,
            repeatModal:false,
            count:0,
            videoModal:false,
            clockVisible:false,
            modalVisible:false,
            alarms:[],
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
        this.setState({date:datetime})

    }

    hideDatePicker = () => {
        this.setState({ clockVisible: false });
    };

    hideModal = () =>{
        this.setState({modalVisible:false})
    }

    pressHandler = (item) => {
        if(this.state.selectedVideos.length<3)
        {
        this.setState({
            selectedVideos : [...this.state.selectedVideos,item.link],
            selecedVideoName: [...this.state.selecedVideoName, item.name]

        })
        }
        else
        {
            alert('Maximum 3 Videos allowed')
        }
    }
    pressHandlerRepeat = (item) => {
        alert('hello');
            this.setState({
                repeatedDays: [...this.state.repeatedDays, item],
               

            })
        
       
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

    closed = ()=>{
        this.setState({repeatModal:false})
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
              
                this.setState({
                    alarms:[...this.state.alarms,{id:Math.random(),videos:this.state.selectedVideos,date:this.state.date}]
                })
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
        console.log(this.state.date)
        return (
            <View style = {{flex : 1}}>
            <View style={{padding:10}}>
                <TouchableOpacity 
                onPress = {()=>{this.setState({setAlarmModal:true})}}
                    style={{ backgroundColor: "#9b3740",width:'95%',padding:20,alignItems:"center",borderRadius:10,alignSelf:'center'}}>
                  <Text style = {{color:'white',fontSize:20}}>Weekly Schedule</Text>
                </TouchableOpacity>
                <View>
                    <Text style={{fontSize:20,marginHorizontal:10,marginVertical:20}}>Upcoming Schedules</Text>
                    <View style= {{height:1,width:'98%',backgroundColor:'rgba(0,0,0,0.1)',alignSelf:'center'}}></View>
                    <FlatList
                    data = {this.state.alarms}
                    renderItem = {({item})=><AlarmItem data = {item}/>}
                    />
                </View>
            </View>
                
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
                videoNames = {this.state.selecedVideoName}
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
                <Modal visible={this.state.setAlarmModal}
                animationType = 'slide'
                animated
                >
                    <View style={{ backgroundColor: '#f5f5f5', height: height - 10, marginTop: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10, margin: 3 }}>
                        <View style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', backgroundColor: '#9b3740', paddingHorizontal: 20, paddingVertical: 20 }}>
                            <TouchableOpacity
                                onPress={() => { this.setState({ setAlarmModal: false }) }}
                            >
                                <Text style={styles.functionBtns}>Cancel</Text>
                            </TouchableOpacity>
                            <Text style={{ fontSize: 18, color: 'white' }}>Add Alarm</Text>
                            <TouchableOpacity
                                onPress={() => this.addAlarm()}
                            >
                                
                                <Text style={styles.functionBtns}>Save</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ backgroundColor: '#f6f6f6',padding:20,borderColor:'rgba(0,0,0,0.2)',borderWidth:0.5 }}>
                            
                            <TouchableOpacity onPress = {()=>{this.setState({clockVisible:true})}} style = {{alignItems:'center', flexDirection:'row',justifyContent:'space-between'}}>
                                <Text style = {{fontSize:20,color:'black'}}>{this.state.date?moment(this.state.date).format('HH:mm'):'08:00 AM'}</Text>
                                <Image source = {require('./src/assets/right.png')}
                                style = {{width:20,height:20,opacity:0.2}}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ backgroundColor: '#f6f6f6', padding: 20,borderColor:'rgba(0,0,0,0.2)',borderWidth:0.5 }}>

                            <TouchableOpacity onPress={() => { this.setState({ repeatModal: true }) }} style={{ alignItems:'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 20, color: 'black' }}>Repeat</Text>
                                <Image source={require('./src/assets/right.png')}
                                    style={{ width: 20, height: 20, opacity: 0.2 }}
                                />
                                <SetAlarm repeatModal = {this.state.repeatModal}
                                closed = {this.closed}
                                repeatedDays = {this.state.repeatedDays}
                                    pressHandlerRepeat={this.pressHandlerRepeat}
                               
                                />
                                
                            </TouchableOpacity>
                            {this.state.repeatedDays ?
                                <FlatList
                                    data={this.state.repeatedDays}
                                    renderItem={({ item }) => { return (<TouchableOpacity style={{ backgroundColor: 'orange', padding: 10, borderRadius: 5, margin: 5 }}><Text>{item}</Text></TouchableOpacity>) }}
                                    keyExtractor={(item, index) => `${Math.random()}`}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                />
                                : null
                            }
                        </View>
                        <View style={{ backgroundColor: '#f6f6f6', padding: 20, borderColor: 'rgba(0,0,0,0.2)', borderWidth: 0.5 }}>

                            <TouchableOpacity onPress={() => { this.setState({ modalVisible: true }) }} style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 20, color: 'black' }}>Videos</Text>
                                <Image source={require('./src/assets/right.png')}
                                    style={{ width: 20, height: 20, opacity: 0.2 }}
                                />
                             
                            </TouchableOpacity>
                            {this.state.selecedVideoName ?
                                <FlatList
                                    data={this.state.selecedVideoName}
                                    renderItem={({ item }) => { return (<TouchableOpacity style={{ backgroundColor: 'orange', padding: 10, borderRadius: 5, margin: 5 }}><Text>{item}</Text></TouchableOpacity>) }}
                                    keyExtractor={(item, index) => `${Math.random()}`}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                />
                                : null
                            }
                        </View>
                    </View>
                  
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    functionBtns: {
        fontSize: 14,
        color: 'white'
    }
})
