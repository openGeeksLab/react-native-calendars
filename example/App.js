/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

LocaleConfig.locales['own'] = {
  monthNames: ['January','February','March','April','May','June','July','August','September','October','November','December'],
  monthNamesShort: ['Jan.','Feb.','Mar.','Apr.','May','Jun.','Jul.','Aug.','Sep.','Oct.','Nov.','Dec.'],
  dayNames: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
  dayNamesShort: ['S','M','T','W','T','F','S']
};

LocaleConfig.defaultLocale = 'own';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <CalendarList
          onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
          onDayPress={(day) => {console.log('selected day', day)}}
          pastScrollRange={50}
          futureScrollRange={50}
          scrollEnabled={true}
          showScrollIndicator={true}
          current={'2018-07-01'}
          hideExtraDays={false}
          markingType={'badge'}
          markedDates={{
            '2018-07-16': {marked: true, count: 3},
            '2018-07-17': {marked: true, count: '9+'},
            '2018-07-19': {marked: true, count: 2},
          }}
          theme={{
            justifyHeader: 'flex-start',
            badge: {
              // width: 20,
              // height: 20,
            },
            badgeText: {
              // fontSize: 10,
              // fontFamily: 'Time New Roman',
            },
            todayContainerStyle: {
              marginTop: -5,
            },
            todayTextStyle: {
              fontSize: 20,
              fontWeight: 'bold',
            },
            // 
            /* styles for name of days
            *
            * textDayHeaderFontSize ,
            * textDayHeaderFontFamily,
            * textDayHeaderFontWeight,
            * textSectionTitleColor
            * */
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 50,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
