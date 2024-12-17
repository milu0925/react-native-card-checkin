import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Calendar from '../components/Calendar';
import SelectBar from '../components/SelectBar';
import CheckinLayout from '../components/layout/CheckinLayout';
import {useState} from 'react';

export default function ListScreen() {
  const [data, setData] = useState([
    {date: '2024/12/1', state: 'Not arrived', click: false},
    {date: '2024/12/2', state: 'Checkin', click: true},
    {date: '2024/12/3', state: 'Not arrived', click: false},
    {date: '2024/12/4', state: 'Checkin', click: true},
    {date: '2024/12/5', state: 'Checkin', click: true},
    {date: '2024/12/6', state: 'Not arrived', click: false},
    {date: '2024/12/7', state: 'Not arrived', click: false},
    {date: '2024/12/8', state: 'Not arrived', click: false},
    {date: '2024/12/9', state: 'Not arrived', click: false},
    {date: '2024/12/10', state: 'Checkin', click: true},
    {date: '2024/12/11', state: 'Checkin', click: true},
    {date: '2024/12/12', state: 'Not arrived', click: false},
    {date: '2024/12/13', state: 'Not arrived', click: false},
    {date: '2024/12/14', state: 'Checkin', click: true},
    {date: '2024/12/15', state: 'Checkin', click: true},
    {date: '2024/12/16', state: 'Not arrived', click: false},
    {date: '2024/12/17', state: 'Checkin', click: true},
    {date: '2024/12/18', state: 'Checkin', click: true},
  ]);

  const handleClick = index => {
    const updatedData = data.map((ditem, di) => {
      if (index == di) {
        return {...ditem, click: true};
      }
      return ditem;
    });
    setData(updatedData);
  };

  return (
    <CheckinLayout>
      <View style={styles.container}>
        <Text>曠職日期</Text>
        <FlatList
          style={{height: 320}}
          data={data.filter(item => item.state === 'Not arrived')}
          horizontal
          renderItem={({item, index}) => (
            <View style={styles.card}>
              <Text>{item.date}</Text>
              <Text>{item.state}</Text>
              <TouchableOpacity onPress={() => handleClick(index)}>
                {item.click ? (
                  <Text style={styles.cardActiveBtn}>已填寫</Text>
                ) : (
                  <Text style={styles.cardBtn}>填寫</Text>
                )}
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />

        <FlatList
          data={data}
          renderItem={({item, index}) => (
            <View style={styles.cardL}>
              <Text>{item.date}</Text>
              <Text>{item.state}</Text>
              <Text>正常班</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </CheckinLayout>
  );
}

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 250,
    paddingHorizontal: 10,
  },
  card: {
    width: 100,
    height: 120,
    borderColor: '#2E354F',
    borderWidth: 1,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 10,
    paddingInline: 2,
    paddingBlock: 8,
    marginBlock: 20,
  },
  cardL: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#2E354F',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBlock: 5,
  },
  cardBtn: {
    backgroundColor: '#D87362',
    color: '#FFFFFF',
    paddingInline: 20,
    paddingBlock: 3,
    borderRadius: 6,
  },
  cardActiveBtn: {
    backgroundColor: '#5E91A4',
    color: '#FFFFFF',
    paddingInline: 20,
    paddingBlock: 3,
    borderRadius: 6,
  },
});
