import {StyleSheet, Platform} from 'react-native';
import * as defaultStyle from '../../../style';

const STYLESHEET_ID = 'stylesheet.day.basic';

export default function styleConstructor(theme={}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    base: {
      width: 32,
      height: 32,
      alignItems: 'center'
    },
    androidBase: {
      flex: 1,
      alignItems: 'center'
    },
    text: {
      marginTop: Platform.OS === 'android' ? 4 : 6,
      fontSize: appStyle.textDayFontSize,
      fontFamily: appStyle.textDayFontFamily,
      fontWeight: '300',
      color: appStyle.dayTextColor,
      backgroundColor: 'rgba(255, 255, 255, 0)',
    },
    androidText: {
      //marginBottom: 10,
    },
    alignedText: {
      marginTop: Platform.OS === 'android' ? 4 : 6
    },
    selected: {
      backgroundColor: appStyle.selectedDayBackgroundColor,
      borderRadius: 16
    },
    today: {
      backgroundColor: appStyle.todayBackgroundColor,
      ...appStyle.todayContainerStyle,
    },
    todayText: {
      color: appStyle.todayTextColor,
      ...appStyle.todayTextStyle,
    },
    selectedText: {
      color: appStyle.selectedDayTextColor
    },
    disabledText: {
      color: appStyle.textDisabledColor
    },
    badge: {
      width: 20,
      height: 20,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 1,
      borderRadius: 10,
      opacity: 0,
      borderWidth: 1,

      position: 'absolute',
      bottom: -1,
      right: -13,
      ...theme.badge,
    },
    androidBadge: {
      right: 0,
      bottom: 0,
    },
    badgeText: {
      fontSize: 10,
      color: appStyle.badgeColor,

      ...theme.badgeText,
    },
    visibleBadge: {
      opacity: 1,
      borderColor: appStyle.badgeColor
    },
    selectedBadge: {
      backgroundColor: appStyle.selectedBadgeColor
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}
