import {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SelectBar(prop) {
  const year = new Date(prop.currentMonth).getFullYear();
  const month = new Date(prop.currentMonth).getMonth() + 1;
  const day = new Date(prop.currentMonth).getDate();

  const handlePrevious = () => {
    let newMonth = month - 1;
    if (newMonth == -1) {
      prop.setCurrentMonth(new Date(year - 1, newMonth - 1));
      return;
    }
    prop.setCurrentMonth(new Date(year, newMonth - 1));
  };

  const handleNext = () => {
    let newMonth = month;
    if (newMonth > 12) {
      prop.setCurrentMonth(new Date(year + 1, 0));
      return;
    }
    prop.setCurrentMonth(new Date(year, newMonth));
  };

  const now = new Date(year, month - 1).toLocaleString('en-US', {
    month: 'long',
  });
  return (
    <View style={styles.dateBlock}>
      <Icon
        name="caret-left"
        size={50}
        color="#3D476A"
        onPress={handlePrevious}
      />
      <Text style={styles.text}>{now}</Text>
      <Icon name="caret-right" size={50} color="#3D476A" onPress={handleNext} />
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
