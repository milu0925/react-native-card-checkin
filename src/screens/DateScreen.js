import {View, Text, Dimensions, StyleSheet} from 'react-native';
import Calendar from '../components/Calendar';
import SelectBar from '../components/SelectBar';
import CheckinLayout from '../components/layout/CheckinLayout';

import {useState} from 'react';
export default function DateScreen() {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  return (
    <CheckinLayout>
      <View style={styles.container}>
        <SelectBar
          currentMonth={currentMonth}
          setCurrentMonth={setCurrentMonth}
        />
        <Calendar currentMonth={currentMonth} />
      </View>
    </CheckinLayout>
  );
}

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    marginTop: 230,
  },
});
