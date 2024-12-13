import {Text, View, StyleSheet, Dimensions} from 'react-native';
import {useState, useEffect} from 'react';

export default function Calendar(prop) {
  const [days, setDays] = useState([]);
  const {year, month} = prop.currentMonth;
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // 現在這個月的第一天
  const firstMonth = new Date(year, month, 1);
  const firstMonthDay = firstMonth.getDay();

  // 計算從當前月份的前一個週日開始
  const startDate = new Date(firstDayOfCurrentMonth);
  startDate.setDate(firstDayOfCurrentMonth.getDate() - firstDayOfWeek);

  return (
    <>
      <View style={styles.dayname}>
        {daysOfWeek.map((value, index) => (
          <Text key={index} style={styles.daynametext}>
            {value}
          </Text>
        ))}
      </View>
      <View style={styles.daybox}>
        {days.map((day, index) => (
          <View key={index} style={styles.day}>
            <Text style={styles.daynum}>{day}</Text>
          </View>
        ))}
      </View>
    </>
  );
}

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  dayname: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  daynametext: {
    fontSize: 20,
  },

  daybox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    paddingLeft: 16,
    paddingRight: 4,
    paddingBlock: 16,
  },
  day: {
    width: width / 8.8,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C2C5D0',
    borderRadius: 25,
  },
  daynum: {
    width: width / 8.8,
    height: 40,
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'BB',
    textAlign: 'center',
    lineHeight: 36,
  },
});
