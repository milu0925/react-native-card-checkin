import {View, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Checkin from '../Checkin';
export default function CheckinLayout({children}) {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#2E354F', '#556294']} style={styles.topbg} />
      <LinearGradient colors={['#F1F1F1', '#F1F1F1']} style={styles.bottombg} />
      <Checkin />
      {children}
    </View>
  );
}

const {width} = Dimensions.get('window');
const height = width / 2;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#FFFFFFF',
  },
  topbg: {
    position: 'absolute',
    width: width + 100,
    height: height - 80,
    top: 0,
    left: width - 60,
    transform: [{translateX: -width}],
    borderBottomLeftRadius: width,
    borderBottomRightRadius: width,
    shadowColor: '#2E354F',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  bottombg: {
    position: 'absolute',
    width: width + 280,
    height: 750,
    bottom: 0,
    zIndex: -2,
    left: width - 140,
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 5,
    transform: [{translateX: -width}],
    borderTopLeftRadius: width,
    borderTopRightRadius: width,
    backgroundColor: 'white',
  },
});
