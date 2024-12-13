import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useState, useEffect} from 'react';
export default function Checkin() {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();

  const monthName = new Date(year, month).toLocaleString('en-US', {
    month: 'long',
    timeZone: 'Asia/Taipei',
  });
  const weekName = new Date(year, month).toLocaleString('en-US', {
    weekday: 'long',
    timeZone: 'Asia/Taipei',
  });

  // 時間設定
  const [time, setTime] = useState(null);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString('zh-TW', {
          hour12: false,
          timeZone: 'Asia/Taipei',
        }),
      );
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={styles.checkin}>
      <View style={styles.monthdayblock}>
        <Text style={styles.month}>{monthName}</Text>
        <Text style={styles.day}>{day}</Text>
      </View>
      <Text style={styles.list}>＝</Text>
      <TouchableOpacity
        style={styles.checkinButton}
        onPress={() => {
          console.log('打卡成功');
        }}>
        <Text style={styles.time}>{time}</Text>
        <Text style={styles.date}>{weekName}</Text>
        <Image
          style={styles.img}
          source={require('../../assets/clock.png')}
          resizeMode="contain"
        />
        <View style={styles.circle1} />
        <View style={styles.circle2} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  checkin: {
    position: 'absolute',
    zIndex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingTop: 20,
  },

  monthdayblock: {
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  month: {
    fontSize: 24,
    fontFamily: 'AA',
    color: '#ffffff',
  },
  day: {
    fontSize: 30,
    fontFamily: 'AA',
    color: '#ffffff',
  },

  list: {
    width: 75,
    fontSize: 50,
    color: '#ffffff',
  },

  checkinButton: {
    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: [{translateX: -90}, {translateY: -54}],
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#ffffff',
    width: 180,
    height: 180,
    backgroundColor: '#2E354F',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFFFFF',
    overflow: 'hidden',
  },

  time: {
    fontSize: 30,
    color: '#FFFFFF',
  },
  date: {
    fontSize: 10,
    color: '#FFFFFF',
  },
  img: {
    position: 'absolute',
    bottom: 18,
    width: 30,
    height: 30,
    tintColor: '#FFFFFF',
  },
  circle1: {
    position: 'absolute',
    zIndex: -2,
    bottom: -75,
    left: -50,
    backgroundColor: 'rgba(152, 163, 203, 0.4)',
    width: 180,
    height: 180,
    borderRadius: 100,
  },
  circle2: {
    position: 'absolute',
    zIndex: -1,
    bottom: -20,
    right: 0,
    backgroundColor: '#7D839B',
    width: 100,
    height: 100,
    borderRadius: 100,
  },
});
