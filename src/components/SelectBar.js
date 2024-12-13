import {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function getMonthName(year, month) {
  return new Date(year, month).toLocaleString('en-US', {
    month: 'long',
  });
}

export default function SelectBar(prop) {
  const [month, setMonth] = useState();
  const [monthIndex, setMonthIndex] = useState(prop.currentMonth.month);
  useEffect(() => {
    const date = getMonthName(prop.currentMonth.year, monthIndex);
    setMonth(date);
  }, [monthIndex]);

  const handlePrevious = () => {
    const newIndex = (monthIndex - 1 + 12) % 12;
    setMonthIndex(newIndex);
  };
  const handleNext = () => {
    const newIndex = (monthIndex + 1) % 12;
    setMonthIndex(newIndex);
  };

  return (
    <View style={styles.dateBlock} marginHorizontal>
      <Icon
        name="caret-left"
        size={30}
        color="#3D476A"
        onPress={handlePrevious}
      />
      <Text style={styles.text}>{month}</Text>
      <Icon name="caret-right" size={30} color="#3D476A" onPress={handleNext} />
    </View>
  );
}

const styles = StyleSheet.create({
  dateBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 16,
    paddingInline: 24,
    paddingBlock: 12,
  },

  text: {
    color: '#495580',
    fontSize: 30,
  },
});
