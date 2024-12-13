import {Text, View, StyleSheet, Dimensions} from 'react-native';
import {useState, useEffect} from 'react';

export default function Calendar(prop) {
  const [days, setDays] = useState([]);
  const year = new Date(prop.currentMonth).getFullYear();
  const month = new Date(prop.currentMonth).getMonth() + 1;
  const day = new Date(prop.currentMonth).getDay();
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  useEffect(() => {
    const startDay = new Date(year, month, 1); // 這個月第一天
    const lastDay = new Date(year, month, 0); // 這個月最後一天
    const totalDays = lastDay.getDate(); // 這個月所有天數

    const lastDayOfPrevMonth = new Date(year, month - 1, 0).getDate(); // 取得上個月的最後一天日期

    const calendar = []; // 儲存顯示月份
    const startDayOfWeek = startDay.getDay(); // 這個月第一天是星期幾
    // 填充上個月的日期
    for (let i = startDayOfWeek - 1; i >= 0; i--) {
      calendar.push(lastDayOfPrevMonth - i);
    }

    // 填充當月的日期
    for (let day = 1; day <= totalDays; day++) {
      calendar.push(day);
    }

    // 填充下個月的日期
    const remainingDays = (7 - (calendar.length % 7)) % 7;
    for (let i = 1; i <= remainingDays; i++) {
      calendar.push(i);
    }

    setDays(calendar);
  }, [year, month]);

  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  console.log(prop.currentMonth, '選到');

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
        {days.map((daysdata, index) => {
          const isToday = month == currentMonth + 1 && year == currentYear;
          return (
            <View
              key={index}
              style={[
                styles.days,
                isToday && daysdata == currentDay && styles.activeColor,
              ]}>
              <Text
                style={[
                  styles.dayText,
                  isToday && daysdata == currentDay && styles.activeTextColor,
                ]}>
                {daysdata}
              </Text>
            </View>
          );
        })}
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
    justifyContent: 'space-evenly',
    gap: 4,
    paddingVertical: 16,
    paddingLeft: 6,
    paddingRight: 6,
  },
  days: {
    width: (width - 24 - 48) / 7,
    height: 45,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C2C5D0',
  },
  dayText: {
    textAlign: 'center',
  },
  activeTextColor: {
    color: '#FFFFFF',
  },
  activeColor: {
    backgroundColor: '#495580',
  },
});
