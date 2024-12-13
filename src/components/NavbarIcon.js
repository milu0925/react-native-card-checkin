import {Image} from 'react-native';
export default function NavbarIcon({name, color}) {
  const imageMap = {
    date: require('../../assets/date.png'),
    analysis: require('../../assets/analysis.png'),
    index: require('../../assets/index.png'),
    list: require('../../assets/list.png'),
  };

  return (
    <Image
      name={name}
      source={imageMap[name]}
      style={{width: 20, height: 20, tintColor: color}}
    />
  );
}
