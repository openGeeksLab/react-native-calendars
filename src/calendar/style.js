import {StyleSheet} from 'react-native';
import * as defaultStyle from '../style';

const STYLESHEET_ID = 'stylesheet.calendar.main';

export default function getStyle(theme={}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    container: {
      paddingLeft: 5,
      paddingRight: 5,
      backgroundColor: appStyle.calendarBackground
    },
    adndroidContainer: {
      marginVertical: 10,
    },
    monthView: {
      backgroundColor: appStyle.calendarBackground,
    },
    week: {
      marginTop: 7,
      marginBottom: 7,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    androidWeek: {
      justifyContent: 'flex-start',
    },
    dayContainer: {
      width: 32
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}

