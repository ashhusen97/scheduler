import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Dimensions, Button, TouchableOpacity,YellowBox, Modal,FlatList } from 'react-native'
import BackgroundTask from 'react-native-background-task'
import Video from 'react-native-video';
import BackgroundTimer from 'react-native-background-timer'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'
import VideoPicker from './src/VideoPicker'
import Icon from 'react-native-vector-icons/FontAwesome';
import ToggleSwitch from 'toggle-switch-react-native'
YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);
console.ignoredYellowBox = ['Warning: ReactNative.createElement'];
const { width, height } = Dimensions.get('window')



interval = 0;
export default class AlarmNew extends Component {



  constructor(props) {
    super(props)
    this.state = {
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
      isDatePickerVisible: false,
      modalVisible: false,
      alarmModal:false,
      alarms : [],
      date:null,
      videos: [{ id: '1', name: 'waterfall', type: 'mp4', thumbnail: 'img.jpg' },
        { id: '1', name: 'Waterfall', value: 'waterfall', type: 'mp4', thumbnail: 'img.jpg' },
        { id: '1', name: 'Waterfall', value: 'waterfall', type: 'mp4', thumbnail: 'img.jpg' },
        { id: '1', name: 'Waterfall', value: 'waterfall', type: 'mp4', thumbnail: 'img.jpg' },
        { id: '1', name: 'Waterfall', value: 'waterfall', type: 'mp4', thumbnail: 'img.jpg' },
        { id: '1', name: 'Waterfall', value: 'waterfall', type: 'mp4', thumbnail: 'img.jpg' },
        { id: '1', name: 'Waterfall', value: 'waterfall', type: 'mp4', thumbnail: 'img.jpg' },

    
    ],
    checked:[]
    };

  }
  componentDidMount(){
    BackgroundTask.schedule()
  }

    
  showAlarms = (item) =>{
    return(
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, marginTop: 10, ...styles.shadow, backgroundColor: '#fff' }}>
      <Text style={{ fontSize: 14, fontWeight: '400', opacity: 0.2 }}>AM</Text>
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{item.date}</Text>
      <ToggleSwitch
        isOn={item.status==='active'?true:false}

        onColor="green"
        offColor="#be4b49"
        labelStyle={{ color: "black", fontWeight: "900" }}
        size="small"
        onToggle={isOn => console.log("changed to : ", isOn)}
      />
    </View>
    )
  }


  checkCard(item){

  this.setState(
    {
      checked:[...this.state.checked,item.name+"."+item.type]
    }
    
  )
    console.log(this.state.checked)
  }
  videoItem = (item) => {

    return (
     <TouchableOpacity onPress = {()=>{this.checkCard(item)}}> 
      <View style={{ ...styles.card,...styles.shadow, flexDirection: 'row' }}>
         
        <View style = {{position: 'absolute',top:-5,left:-5,padding:2,backgroundColor:'lightskyblue',borderRadius:30}}>
            
            <Icon name="check" size={15} color="green" />
              
        </View>
          
        <Image 
          source={require('./img.png')}
            style = {{width:40,height:40,marginRight:10}}
            />
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>  
    )
  }
  showDatePicker = () => {
    this.setState({ isDatePickerVisible: true });
  };

  hideDatePicker = () => {
    this.setState({ isDatePickerVisible: false });
  };

  handleConfirm = datetime => {
    this.hideDatePicker();
    this.setState({date:datetime})

    
  };

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

  defineTask = () => {
    BackgroundTimer.runBackgroundTimer(() => {
      var date = new Date().toLocaleTimeString()

      console.log(date)
    },
      1000);
  }

  stop() {
    this.setState({ modalVisible: false, paused: true })
    BackgroundTimer.clearInterval(this.interval)

    BackgroundTimer.stop()

  }
 

  addAlarm = () =>{

   
    console.log(this.state.alarms)
    var date1 = moment(this.state.date).format()
    
    var diff = moment(date1).diff(moment().format())
    

    if (diff < 0) {
      alert('Time has passed')
      return
    }
    alert('Alarm Set')
    this.setState({
      alarms: [...this.state.alarms, { date: moment(this.state.date).format('HH:mm'), status: 'active' }]
    })
    BackgroundTimer.start()
    this.interval = BackgroundTimer.setInterval(() => {

      this.setState({
        modalVisible: true,
        paused: false
      })
    },
      diff)
    BackgroundTimer.stop()
    
  }

  updateUser = (movie) => {
    this.setState({ movie: movie })
  }
  render() {
    console.disableYellowBox = true;
    return (
      <View style={{ flex: 1 }}>
       
        <View style = {{alignItems:"center"}}>
          <Text style = {{fontSize:20,fontWeight:'bold'}}>Make Me Up</Text>
        </View>

        <FlatList 
        data = {this.state.alarms}
        renderItem = {({item})=>this.showAlarms(item)}
        />
       

        {/* alarms */}



        <View style = {{position:'absolute',bottom:10,left:10,right:10}}>
          <TouchableOpacity
          onPress = {()=>{this.setState({alarmModal:true})}}
            style={{ backgroundColor:'#be4b49',alignItems:'center',justifyContent:'center', height:40}}
          >
          <Text style = {{color:'white'}}>Add New</Text>
          </TouchableOpacity>
        </View>



      
      {/* alarm Modal */}
        <Modal
          visible={this.state.alarmModal}
        >
          <View style={{ flex: 1,padding:20}}>

            <View style = {{flexDirection:'row',justifyContent:"space-between",padding:10}}>
              <Text style = {{fontSize:24}}>Set Alarm</Text>
              <Button title="X" onPress={() => { this.setState({ alarmModal: false }) }}  color= "#be4b49" /> 
            </View>
            <View>
              
           
              
              <TouchableOpacity 
                onPress={() => { this.showDatePicker()}}
              style = {{flexDirection:'row',justifyContent:'center',alignItems:'center',marginVertical:10}}>
              
                <Text style={{ fontSize: 30, color: 'white', backgroundColor:'#be4b49',padding:30}}>
                { 
                  this.state.date ? 
                  moment(this.state.date).format('HH')
                  :moment().format('HH')
                  }
                
                </Text>
                <Text style={{ fontSize: 30, color: 'white', backgroundColor: '#be4b49', padding: 30,marginLeft:10 }}>
                {
                      this.state.date ?
                        moment(this.state.date).format('mm')
                        : moment().format('mm')
                  }
                </Text>
                </TouchableOpacity>

              <FlatList
                data={this.state.videos}
                renderItem={({ item }) => this.videoItem(item)}
                horizontal
                showsHorizontalScrollIndicator = {false}

              />
          
              
              <DateTimePickerModal
                isVisible={this.state.isDatePickerVisible}
                mode={'time'}
                onConfirm={this.handleConfirm}
                is24Hour={false}
                onCancel={() => { this.hideDatePicker }}
                date={new Date()}

              />
              
            </View>

            <View style = {{position:'absolute',bottom:10,left:10,right:10}}>
              <TouchableOpacity
                onPress={() => { this.addAlarm() }}
                style={{ backgroundColor: '#be4b49', alignItems: 'center', justifyContent: 'center', height: 40 }}
              >
                <Text style={{ color: 'white' }}>Add Alarm</Text>
              </TouchableOpacity>
          
            </View>
          </View>
        </Modal>


        <Modal
          visible={this.state.modalVisible}
        >
          <View style={{ flex: 1, backgroundColor: '#be4b49' }}>
            <View style={{ flex: 3 }}>
              {/* <TouchableWithoutFeedback
        onPress= {()=>this.setState({paused:!this.state.paused})}
        > */}

              <Video
                disableFocus={false}
                pictureInPicture={true}
                ref={(ref) => { this.video = ref }}
                source={require('./waterfall.mp4')}
                repeat={!this.state.repeat}
                rate={this.state.rate}
                volume={1}
                muted={this.state.muted}
                resizeMode={this.state.resizeMode}
                paused={this.state.paused}
                onLoad={this.onLoad}
                onProgress={this.onProgress}
                onEnd={this.onEnd}
                controls={true}
                playInBackground={true}
                onVideoEnd={() => alert('end')}
                style={styles.backgroundVideo}
              />

              {/* </TouchableWithoutFeedback> */}
            </View>
            <View style={{ flex: 1 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Button title="Stop" onPress={() => { this.stop() }} />
                <Button title="Show Date Picker" onPress={() => { this.setState({ paused: true }) }} />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}
BackgroundTask.define(() => {
  BackgroundTimer.start()
  console.log('runningfrom backgground')
  BackgroundTask.finish()
})
const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0
  },
  shadow:{
    shadowColor :'black',
    shadowOffset:{width:2,height:2},
    shadowOpacity:0.3,
    shadowRadius :10,
    elevation:4
  },
  card: {
    width: width /2,
    padding: 30,
    marginVertical:10,
    backgroundColor:'#fff',
    borderRadius:10,
    marginHorizontal:10,
    
  }
})
