import {View, Text, StyleSheet, Dimensions} from 'react-native';
import CheckinLayout from '../components/layout/CheckinLayout';
import {ProgressChart, PieChart} from 'react-native-chart-kit';
export default function AnalysisScreen() {
  const data = {
    labels: ['遲到', '未出席', '出席'],
    data: [0.05, 0.15, 0.8],
  };
  const chartConfig = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: (opacity = 0.1) => `rgba(46, 53, 79, 0.6)`,
    strokeWidth: 1,
    barPercentage: 0.1,
    useShadowColorFromDataset: false,
  };

  const datas = [
    {
      name: '出席',
      population: 80,
      color: 'rgb(46, 53, 79)',
      legendFontColor: 'rgb(46, 53, 79)',
      legendFontSize: 15,
    },
    {
      name: '未出席',
      population: 10,
      color: 'rgba(212, 212, 212,0.5)',
      legendFontColor: 'rgb(46, 53, 79)',
      legendFontSize: 15,
    },
    {
      name: '遲到',
      population: 10,
      color: 'rgba(255, 8, 8, 0.5)',
      legendFontColor: 'rgb(46, 53, 79)',
      legendFontSize: 15,
    },
  ];
  const screenWidth = Dimensions.get('window').width;
  return (
    <CheckinLayout>
      <View style={styles.container}>
        {/* <ProgressChart
          data={data}
          width={screenWidth}
          height={220}
          strokeWidth={20}
          radius={40}
          chartConfig={chartConfig}
          hideLegend={false}
        /> */}
        <PieChart
          data={datas}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
          accessor={'population'}
          backgroundColor={'transparent'}
          paddingLeft={'15'}
          absolute
        />
        <View style={styles.circleblock}></View>
        <Text>總工時：246h</Text>
      </View>
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
  circleblock: {
    position: 'absolute',
    top: 205,
    left: 42,
    borderRadius: 1000,
    width: 140,
    height: 140,
    backgroundColor: 'rgb(241, 241, 241)',
  },
});
