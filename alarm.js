import React, { Component } from 'react'
import { Text, StyleSheet, View ,TouchableWithoutFeedback,Dimensions,Button,DateTime} from 'react-native'
import BackgroundTask from 'react-native-background-task'
import Video from 'react-native-video';
import BackgroundTimer from 'react-native-background-timer'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'

const {width,height} = Dimensions.get('window')

 
// BackgroundTask.define(() => {
//   console.log('Hello from a background task')
//   BackgroundTask.finish()
// })
 
export default class App extends Component {

  

  constructor(props)
  {
    super(props)
    this.state = {
      repeat:true,
      rate:1,
      volume:1,
      muted:false,
      resizeMode:'contain',
      duration:0.0,
      currentTime:0.0,
      paused:true,
      rateText:'1.0',
      pausedText:'Play',
      hideControls:false,
      counter: 0, 
      isDatePickerVisible:false,
      
    };

  }
   showDatePicker = () => {
    this.setState({isDatePickerVisible:true});
  };

   hideDatePicker = () => {
     this.setState({ isDatePickerVisible: false });
  };

   handleConfirm = datetime => {
    console.warn("A date has been picked: ", datetime);
    
    var date1 = moment(datetime).format()
     console.log("date  : " +date1)
   var diff =   moment(date1).diff(moment().format())
     console.log("difference : "+diff)
     
    //  var alarm = new Date(date)
    // //  var alarmTime = new Date(alarm.getFullYear(),alarm.getMonth(),alarm.getDate(),alarm.getHours(),alarm.getMinutes(),alarm.getSeconds())
    
     
    // console.log('alarm time original : ' + alarm)
    //  var diff = alarm - (new Date()).getTime()
    // if(diff < 0)
    // {
    //   alert("Time has already passed")
    // }
    // else
    // {
    //   alert("yo")
    // }
    //  console.warn("dateked: ", diff);
    this.hideDatePicker();

     BackgroundTimer.runBackgroundTimer(() => {
       var date = new Date().toLocaleTimeString()

        this.setState({paused:false})
     },
       diff);
  };

  onLoad = (data)=>{
    this.setState({duration:data.duration})
  }
  onPress = (data) =>{
    this.setState({currentTime:data.currentTime})
  }
  onEnd = ()=>{
    this.setState({pausedText:'Play',paused:true})
    this.video.seek(0);
  }

  defineTask = () => {
    BackgroundTimer.runBackgroundTimer(() => {
     var date = new Date().toLocaleTimeString()
    
      console.log(date)
    },
      1000);
  }

  componentDidMount()
  {

    BackgroundTask.schedule()
  //   m
  //   var t = moment('02:16', 'HH:mm').format();
  //  console.log("hoursss"+t)
    
  //   const date1 = moment("02").format('hh:mm:ss');
  //   const checkin_time = moment().format('hh:mm:ss');
  //  const dur =  moment.duration(checkin_time,date1)
    // const diff = moment.duration(checkin_time.diff(date1)).as('hours');
    // this.defineTask()
    
  }
  render() {
    return (
      <View style = {{flex:1}}>
        <View style={{ flex: 1,alignItems:'center',justifyContent:'center' }}> 
        <Button title="Show Date Picker" onPress={()=>{this.showDatePicker()}} style = {{zIndex:111}} />
        <DateTimePickerModal
          isVisible={this.state.isDatePickerVisible}
          mode={'datetime'}
          onConfirm={this.handleConfirm}
          is24Hour = {false}
          onCancel={()=>{this.hideDatePicker}}
          date = {new Date()}
          
        />
        </View>
        <View style = {{flex:2}}>
        <TouchableWithoutFeedback
        onPress= {()=>this.setState({paused:!this.state.paused})}
        >
       
        <Video   
          disableFocus = {false}
          pictureInPicture = {true}
          ref = {(ref)=>{this.video = ref}}               
          source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}}
          repeat = {this.state.repeat}
          rate = {this.state.rate}
          volume = {1}
          muted = {this.state.muted}
          resizeMode = {this.state.resizeMode}
          paused = {this.state.paused}
          onLoad = {this.onLoad}
          onProgress = {this.onProgress}
          onEnd = {this.onEnd}
          controls = {true}  
          fullscreen = {true}
          playInBackground = {true}
          onVideoEnd = {()=>alert('end')}
          style={styles.backgroundVideo}                  
          />
       
        </TouchableWithoutFeedback>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom:0,
    right: 0,
  },
})
