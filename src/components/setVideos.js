import React, { Component } from 'react'
import { Text, StyleSheet, View, Modal, TouchableOpacity, FlatList, Dimensions, Image, ScrollView } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'
const { width,height } = Dimensions.get('window')
export default class SetVideos extends Component {

    constructor(props) {
        super(props);
    }
    renderWakeUpVideo = (item) => {
        return (
            <TouchableOpacity onPress={() => this.props.pressHandler(item)} style = {{flex:1}}>
                <View style={{ marginHorizontal:20, backgroundColor: '#f4f4f4', width:width-40, height:height/3, alignItems: "center", marginVertical: 5 }}>
                    <View style={{ width: width-40, height:height/5 }}>
                        <Image
                            style={{ flex: 1, width: null, height: null }}
                            source={item.thumbnail}
                        />
                    </View>
                    <Text>{item.name}</Text>
                    {/* <Text>{this.state.date?moment(this.state.date).format():null}</Text> */}

                </View>
            </TouchableOpacity>
        )
    }
    renderAffirmationVideos = (item) => {
        return (
            <TouchableOpacity onPress={() => this.props.pressHandler(item)} style={{ flex: 1 }}>
                <View style={{ marginHorizontal: 20, backgroundColor: '#f4f4f4', width: width - 40, height: height / 3, alignItems: "center", marginVertical: 5 }}>
                    <View style={{ width: width - 40, height: height / 5 }}>
                        <Image
                            style={{ flex: 1, width: null, height: null }}
                            source={item.thumbnail}
                        />
                    </View>
                    <Text>{item.name}</Text>
                    {/* <Text>{this.state.date?moment(this.state.date).format():null}</Text> */}

                </View>
            </TouchableOpacity>
        )
    }
    render() {
        // console.log(this.state.date)
        return (
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.props.modalVisible}
                    onRequestClose={() => {

                    }}
                >
                    <View style={styles.centeredView}>
                        <ScrollView style={styles.modalView}
                        contentContainerStyle = {{alignItems:'center'}}
                        >
                            <Text style={styles.modalText}>WakeUp Videos</Text>

                            <FlatList
                                data={this.props.WakeupVideos}
                                renderItem={({ item }) => this.renderWakeUpVideo(item)}
                                keyExtractor={(item, index) => `${item.id}`}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                            />

                            <Text style={styles.modalText}>Affirmation Videos</Text>

                            <FlatList
                                data={this.props.AffirmationVideos}
                                renderItem={({ item }) => this.renderAffirmationVideos(item)}
                                keyExtractor={(item, index) => `${item.id}`}
                                horizontal
                                showsHorizontalScrollIndicator  = {false}
                            />
                            
                         
                            <Text style={styles.modalText}>{this.props.videoNames ? 'Selected Videos': null}</Text>
                                <FlatList
                                    data={this.props.videoNames}
                                    renderItem={({ item }) => { return (<TouchableOpacity style = {{backgroundColor:'yellow',padding:10,borderRadius:5,margin:5}}><Text>{item}</Text></TouchableOpacity>) }}
                                    keyExtractor={(item, index) => `${Math.random()}`}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                />
                            
                            
                        
                            <View style = {{flexDirection:'row',padding:20}}>
                            <TouchableOpacity
                                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                onPress={this.props.addAlarm}
                            >
                                <Text style={styles.textStyle}>Add</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ ...styles.openButton, backgroundColor: "red" }}
                                onPress={this.props.hideModal}
                            >
                                <Text style={styles.textStyle}>Back</Text>
                            </TouchableOpacity>
                            </View>

                        </ScrollView>
                    </View>
                </Modal>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 10,
        padding: 10,
        backgroundColor: "white",
        borderRadius: 20,
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        marginHorizontal:4
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize:25,
        marginTop:10
    }
})
