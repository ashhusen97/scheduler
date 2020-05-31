import React, { Component } from 'react'
import { Text, StyleSheet, View,Modal,TouchableOpacity,Dimensions,FlatList} from 'react-native'
import Clock from './Clock';

const {height} = Dimensions.get('window')
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
export default class SetAlarm extends Component {

    alarmItem = (item) =>{
        return (
            <TouchableOpacity 
        style={{ backgroundColor: 'orange', padding: 10, borderRadius: 5, margin: 5 }}>
            <Text>{item}</Text>
        </TouchableOpacity>
        )
    }
    render() {
        console.log(this.props.repeatedDays)
        return (
            
            <Modal visible={this.props.repeatModal}
            >
                <View style={{ backgroundColor: '#f5f5f5',height:height-10,marginTop:10,borderTopLeftRadius:10,borderTopRightRadius:10,margin:3 }}>
                    <View style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', backgroundColor:'#9b3740',paddingHorizontal:20,paddingVertical:20}}>
                        <TouchableOpacity
                        onPress = {this.props.closed}
                        >
                            <Text style = {styles.functionBtns}>Back</Text>
                        </TouchableOpacity>
                        <Text style = {{fontSize:18,color:'white'}}>Repeat</Text>
                        <Text style={{ fontSize: 18, color: 'white' }}>        </Text>
                       
                    </View>
                    {days.map(item=>{

                        return(
                            <TouchableOpacity 
                                onPress={() => this.props.pressHandlerRepeat(item)} 
                            key = {Math.random()} style={{ backgroundColor: '#c9c9c9', padding: 10,borderBottomColor:'rgba(0,0,0,0.1)',borderBottomWidth:0.5 }}>
                                <Text>{item}</Text>
                            </TouchableOpacity>
                        )
                    }) 
                    
                    
                    }
                    <Text style={styles.modalText}>{this.props.repeatedDays.length !== 0 ? 'Repeat Days' : null}</Text>
                    <FlatList
                        data={this.props.repeatedDays}
                        renderItem={({ item }) => this.alarmItem(item)}
                        keyExtractor={(item, index) => `${Math.random()}`}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                    
                </View>
              
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    functionBtns:{
        fontSize:14,
        color:'white'
    }
})
