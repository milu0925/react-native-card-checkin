import {View, StyleSheet} from 'react-native';
import CheckinLayout from '../components/layout/CheckinLayout';
export default function AnalysisScreen() {
  return (
    <CheckinLayout>
      <View style={styles.container}></View>
    </CheckinLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 120,
  },
});
