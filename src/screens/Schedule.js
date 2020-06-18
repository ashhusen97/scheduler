/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  FlatList,
  ScrollView,
  Modal,
  Alert,
  TouchableOpacity,
  DatePickerAndroid,
} from 'react-native';
import {LocaleConfig} from 'react-native-calendars';

import Text from '../components/Text';
import {connect} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
const {width, height} = Dimensions.get('window');
LocaleConfig.locales['fr'] = {
  monthNames: [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ],
  monthNamesShort: [
    'Janv.',
    'Févr.',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juil.',
    'Août',
    'Sept.',
    'Oct.',
    'Nov.',
    'Déc.',
  ],
  dayNames: [
    'Dimanche',
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
  ],
  dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
  today: "Aujourd'hui",
};
LocaleConfig.defaultLocale = 'fr';
class Schedule extends Component {
  state = {
    modalVisible: false,
  };
  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  };

  render() {
    const {modalVisible} = this.state;
    return (
      <ImageBackground
        source={{
          uri:
            'https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-school-season-back-to-school-notice-school-schedule-image_31903.jpg',
        }}
        blurRadius={3}
        style={styles.ImageBackground}>
        <View style={styles.btnContainer}>
          <LinearGradient
            colors={['#5bcd91', '#5bcd91', '#a1cc3a']}
            style={styles.linearGradient}>
            <TouchableOpacity
              onPress={() => {
                this.setModalVisible(true);
              }}>
              <Text h1>+</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <ScrollView>
          <FlatList
            data={this.props.days}
            renderItem={({item}) => {
              return <Text>{item}</Text>;
            }}
          />
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <LinearGradient
              colors={['#01aeaf', '#26bff1']}
              style={styles.modalContainer}>
              <Calendar
                // Initially visible month. Default = Date()
                current={'2012-03-01'}
                // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                minDate={'2012-05-10'}
                // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                maxDate={'2012-05-30'}
                // Handler which gets executed on day press. Default = undefined
                onDayPress={(day) => {
                  console.log('selected day', day);
                }}
                // Handler which gets executed on day long press. Default = undefined
                onDayLongPress={(day) => {
                  console.log('selected day', day);
                }}
                // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                monthFormat={'yyyy MM'}
                // Handler which gets executed when visible month changes in calendar. Default = undefined
                onMonthChange={(month) => {
                  console.log('month changed', month);
                }}
                // Hide month navigation arrows. Default = false
                hideArrows={true}
                // Replace default arrows with custom ones (direction can be 'left' or 'right')
                renderArrow={(direction) => <Arrow />}
                // Do not show days of other months in month page. Default = false
                hideExtraDays={true}
                // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
                // day from another month that is visible in calendar page. Default = false
                disableMonthChange={true}
                // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                firstDay={1}
                // Hide day names. Default = false
                hideDayNames={true}
                // Show week numbers to the left. Default = false
                showWeekNumbers={true}
                // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                onPressArrowLeft={(substractMonth) => substractMonth()}
                // Handler which gets executed when press arrow icon right. It receive a callback can go next month
                onPressArrowRight={(addMonth) => addMonth()}
                // Disable left arrow. Default = false
                disableArrowLeft={true}
                // Disable right arrow. Default = false
                disableArrowRight={true}
                // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
                disableAllTouchEventsForDisabledDays={true}
              />
            </LinearGradient>
          </Modal>
        </ScrollView>
      </ImageBackground>
    );
  }
}
const MapStateToProps = (state) => {
  return {
    days: state.days,
  };
};

const styles = StyleSheet.create({
  ImageBackground: {
    width,
    height,
    paddingBottom: 30,
  },
  AddButton: {
    width: 60,
    height: 60,
    backgroundColor: 'red',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    width,
    height: 70,
    padding: 10,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  linearGradient: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
  },
});

export default connect(MapStateToProps, null)(Schedule);
